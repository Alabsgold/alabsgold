import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  X,
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Download,
  Bell,
  Mail,
  UserCheck,
  LogOut,
  AlertCircle,
  Table,
} from 'lucide-react';
import {
  googleSignIn,
  logoutGoogle,
  initAuth,
  getAccessToken,
  getCurrentUser,
  SCOPES,
} from '../lib/googleAuth';
import {
  findOrCreateMasterSheet,
  syncPendingToGoogleSheets,
  getLocalInteractions,
  exportInteractionsToCsv,
  MASTER_SHEET_NAME,
  TAB_SCOPES,
  TAB_INTERACTIONS,
} from '../services/googleSheetsService';
import { User } from 'firebase/auth';

interface GoogleSheetsHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Authorized founder and studio emails
const AUTHORIZED_FOUNDER_EMAILS = [
  'alabifemigold31@gmail.com',
  'alabsgold31@gmail.com',
];

export const GoogleSheetsHubModal: React.FC<GoogleSheetsHubModalProps> = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [localInteractions, setLocalInteractions] = useState<Array<any>>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Check if current authenticated user is an authorized founder
  const isAuthorizedFounder = currentUser?.email
    ? AUTHORIZED_FOUNDER_EMAILS.includes(currentUser.email.toLowerCase())
    : false;

  useEffect(() => {
    // Listen for auth state
    const unsubscribe = initAuth(
      async (user, token) => {
        setCurrentUser(user);
        if (user?.email && AUTHORIZED_FOUNDER_EMAILS.includes(user.email.toLowerCase()) && token) {
          try {
            const result = await findOrCreateMasterSheet(token);
            setSpreadsheetId(result.spreadsheetId);
            setSheetUrl(result.spreadsheetUrl);
          } catch (e: any) {
            console.warn('Initial sheet lookup:', e);
          }
        }
      },
      () => {
        setCurrentUser(null);
        setSheetUrl(null);
        setSpreadsheetId(null);
      }
    );

    setLocalInteractions(getLocalInteractions());

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [isOpen]);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setErrorMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setCurrentUser(res.user);
        if (res.user.email && AUTHORIZED_FOUNDER_EMAILS.includes(res.user.email.toLowerCase())) {
          const sheetRes = await findOrCreateMasterSheet(res.accessToken);
          setSpreadsheetId(sheetRes.spreadsheetId);
          setSheetUrl(sheetRes.spreadsheetUrl);
          setSyncStatus('Founder verified. Connected to Google Sheets successfully!');
        }
      }
    } catch (err: any) {
      if (
        err?.code !== 'auth/popup-closed-by-user' &&
        err?.code !== 'auth/cancelled-popup-request' &&
        !err?.message?.includes('popup-closed-by-user')
      ) {
        console.warn('Google sign-in:', err?.message || err);
        setErrorMsg(err.message || 'Sign in could not be completed. Please try again.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutGoogle();
    setCurrentUser(null);
    setSheetUrl(null);
    setSpreadsheetId(null);
    setSyncStatus(null);
  };

  const handleSyncPending = async () => {
    setIsSyncing(true);
    setErrorMsg(null);
    try {
      let token = await getAccessToken();
      if (!token) {
        const signinRes = await googleSignIn();
        if (signinRes) {
          token = signinRes.accessToken;
          setCurrentUser(signinRes.user);
        } else {
          setIsSyncing(false);
          return;
        }
      }

      if (token) {
        const result = await syncPendingToGoogleSheets(token);
        setSheetUrl(result.sheetUrl);
        setSyncStatus(`Successfully synchronized ${result.syncedCount} interaction record(s) to Google Sheets!`);
        setLocalInteractions(getLocalInteractions());
      }
    } catch (err: any) {
      if (
        err?.code !== 'auth/popup-closed-by-user' &&
        err?.code !== 'auth/cancelled-popup-request' &&
        !err?.message?.includes('popup-closed-by-user')
      ) {
        console.warn('Sync issue:', err?.message || err);
        setErrorMsg(err.message || 'Failed to sync to Google Sheets');
      }
    } finally {
      setIsSyncing(false);
    }
  };

  const handleExportCsv = () => {
    const success = exportInteractionsToCsv();
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } else {
      setErrorMsg('No interaction records found to export.');
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md animate-in fade-in duration-200" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-amber-500/40 p-6 sm:p-8 text-zinc-100 shadow-2xl focus:outline-none animate-in zoom-in-95 duration-200">
          
          {/* Header with Security Classification */}
          <div className="flex items-start justify-between pb-4 border-b border-[#27272a]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL · FOUNDER DESK ONLY</span>
              </div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Google Sheets & Excel Ledger Console
              </Dialog.Title>
              <Dialog.Description className="text-xs text-zinc-400 mt-1">
                Restricted engineering console for managing client interaction records, spreadsheet sync, and notification rules.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Unauthenticated Security Gate: Prompt Founder to Sign In */}
          {!currentUser && (
            <div className="mt-6 p-6 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Founder Verification Required
                </h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto mt-1 leading-relaxed">
                  For confidentiality and data protection, Google Sheets and Excel records are completely hidden from public visitors. Please verify with the authorized owner Google Account (<span className="text-amber-400 font-mono">alabifemigold31@gmail.com</span>) to unlock the ledger.
                </p>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-xs shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-4 h-4"
                    style={{ display: 'block' }}
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  <span>{isSigningIn ? 'Verifying Founder Account...' : 'Sign in as Founder (Google)'}</span>
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>
          )}

          {/* Access Denied: User signed in with an unauthorized Google Account */}
          {currentUser && !isAuthorizedFounder && (
            <div className="mt-6 p-6 rounded-2xl bg-red-950/20 border border-red-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">
                Access Denied · Unauthorized Account
              </h4>
              <p className="text-xs text-red-300 max-w-md mx-auto leading-relaxed">
                The authenticated account <span className="font-mono font-bold text-white">"{currentUser.email}"</span> does not have administrative privileges to view or modify this ledger. Only <span className="font-mono text-amber-400">alabifemigold31@gmail.com</span> is authorized.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out / Switch Account</span>
                </button>
              </div>
            </div>
          )}

          {/* Authorized Founder Desk View: Everything unlocked */}
          {currentUser && isAuthorizedFounder && (
            <>
              {/* Account & Connection Status Card */}
              <div className="mt-6 p-5 rounded-2xl bg-[#18181b] border border-emerald-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Founder Verified Access</span>
                    </div>
                    <div className="text-base font-bold text-white mt-0.5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{currentUser.email}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Authenticated with Google Sheets & Drive scopes. Interactions and scopes are live-synced.
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>

                {errorMsg && (
                  <div className="mt-3 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {syncStatus && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{syncStatus}</span>
                  </div>
                )}

                {downloadSuccess && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Excel (.csv) export generated and downloaded to your device!</span>
                  </div>
                )}
              </div>

              {/* Master Spreadsheet Details & Excel Actions */}
              <div className="mt-4 p-5 rounded-2xl bg-[#111114] border border-[#27272a] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                      <span>{MASTER_SHEET_NAME}</span>
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Tabs: <span className="text-amber-400 font-mono">"{TAB_SCOPES}"</span> & <span className="text-amber-400 font-mono">"{TAB_INTERACTIONS}"</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {sheetUrl ? (
                      <>
                        <a
                          href={sheetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 shadow"
                        >
                          <span>Open Google Sheet</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {spreadsheetId && (
                          <a
                            href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=xlsx`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 border border-zinc-700"
                            title="Download master spreadsheet directly in Microsoft Excel (.xlsx) format"
                          >
                            <Download className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Export Excel (.xlsx)</span>
                          </a>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={handleSyncPending}
                        disabled={isSyncing}
                        className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                        <span>{isSyncing ? 'Linking...' : 'Create / Link Sheet'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Instant Google Sheets Email Alerts Guide */}
                <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <Bell className="w-4 h-4" />
                    <span>Instant Google Sheets Email Alerts Setup</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-[11px]">
                    In addition to automated direct email dispatch, you can trigger native Google alerts when any client scope is added:
                  </p>
                  <ol className="list-decimal list-inside text-[11px] text-zinc-400 space-y-1 font-mono">
                    <li>Click <strong className="text-white">"Open Google Sheet"</strong> above.</li>
                    <li>In Google Sheets, click <strong className="text-white">Tools → Notification rules</strong>.</li>
                    <li>Choose <strong className="text-white">"Any changes are made"</strong> and <strong className="text-white">"Email - right away"</strong>.</li>
                    <li>Save. Google will instantly alert <strong className="text-amber-400">alabsgold31@gmail.com</strong> whenever client data arrives.</li>
                  </ol>
                </div>
              </div>

              {/* Local / Pending Interactions Ledger */}
              <div className="mt-4 p-5 rounded-2xl bg-[#111114] border border-[#27272a]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Table className="w-4 h-4 text-amber-400" />
                      <span>Recorded Client Interactions & Scopes ({localInteractions.length})</span>
                    </h4>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      Real-time client inquiries buffered securely
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleExportCsv}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                      title="Download recorded client inquiries as an Excel-compatible CSV file"
                    >
                      <Download className="w-3 h-3 text-amber-400" />
                      <span>Export CSV</span>
                    </button>

                    <button
                      onClick={handleSyncPending}
                      disabled={isSyncing || localInteractions.length === 0}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                    >
                      <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                      <span>Sync to Google Sheets</span>
                    </button>
                  </div>
                </div>

                {localInteractions.length === 0 ? (
                  <div className="py-8 text-center text-xs text-zinc-500 font-mono">
                    No client records logged yet. When a visitor submits a project intake or quick reach-out form, it will immediately populate here.
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {localInteractions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#09090b] border border-zinc-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                              {item.type === 'scope' ? 'Project Scope' : item.payload.category || 'Interaction'}
                            </span>
                            <span className="font-bold text-white">
                              {item.payload.fullName || item.payload.name}
                            </span>
                            <span className="text-zinc-500 font-mono text-[10px]">
                              {item.payload.email || item.payload.contact}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-[11px] mt-1 line-clamp-1">
                            {item.payload.projectType || item.payload.subject}: {item.payload.description || item.payload.message}
                          </p>
                        </div>

                        <div className="text-[10px] font-mono text-zinc-500 text-right flex-shrink-0">
                          {new Date(item.savedAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Footer Note */}
          <div className="mt-6 pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="font-mono">
              Auto-Notification Target: <strong className="text-amber-400">alabsgold31@gmail.com</strong>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs cursor-pointer"
            >
              Close
            </button>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
