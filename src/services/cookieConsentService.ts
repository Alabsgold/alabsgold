/**
 * ALABSGOLD Cookie & Data Privacy Service
 * Compliant with:
 * - Nigeria Data Protection Regulation (NDPR) & Nigeria Data Protection Act (NDPA 2023)
 * - General Data Protection Regulation (GDPR - Regulation (EU) 2016/679 & UK GDPR)
 * - ePrivacy Directive (Directive 2002/58/EC)
 */

export interface CookiePreferences {
  necessary: boolean; // Strictly Necessary / Technical Invariants (always true)
  functional: boolean; // UI preferences, sound FX, animation preferences
  analytics: boolean; // Anonymous performance metrics & diagnostic monitoring
  marketing: boolean; // Communication referral tracking & campaign attribution
  timestamp: string;
  version: string;
  hasChosen: boolean;
}

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

export interface CookieInventoryItem {
  name: string;
  category: CookieCategory;
  purpose: string;
  provider: string;
  lifespan: string;
  type: 'Local Storage' | 'Session Token' | 'HTTP Cookie';
  legalBasis: string;
}

export const COOKIE_CONSENT_KEY = 'alabsgold_cookie_consent_v1';
export const COOKIE_CONSENT_EVENT = 'ag_cookie_consent_updated';
export const CURRENT_POLICY_VERSION = '2026.1';

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: CURRENT_POLICY_VERSION,
  hasChosen: false,
};

/**
 * Verified Comprehensive Cookie & Storage Inventory
 */
export const COOKIE_INVENTORY: CookieInventoryItem[] = [
  {
    name: 'alabsgold_cookie_consent_v1',
    category: 'necessary',
    purpose: 'Stores your granular NDPR/GDPR cookie consent preferences and timestamp.',
    provider: 'ALABSGOLD (First-party)',
    lifespan: '12 months',
    type: 'Local Storage',
    legalBasis: 'NDPR Reg 2.1(a) / GDPR Art. 6(1)(c) Compliance with legal obligation',
  },
  {
    name: '__Secure-AG-SESSION',
    category: 'necessary',
    purpose: 'Cryptographic session validation, CSRF defense, and connection security.',
    provider: 'ALABSGOLD (First-party)',
    lifespan: 'Session',
    type: 'HTTP Cookie',
    legalBasis: 'GDPR Art. 6(1)(f) / NDPR Legitimate Interest (Security & Integrity)',
  },
  {
    name: 'firebase_auth_state',
    category: 'necessary',
    purpose: 'Maintains authenticated founder session state for administrative services.',
    provider: 'Google Firebase (First-party proxy)',
    lifespan: 'Session',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(f) Legitimate Interest (Restricted Founder Access)',
  },
  {
    name: 'ag_preloader_seen',
    category: 'functional',
    purpose: 'Remembers whether the cinematic introduction has played to optimize page reloads.',
    provider: 'ALABSGOLD (First-party)',
    lifespan: '30 days',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(a) / NDPR Reg 2.1(a) Explicit Consent',
  },
  {
    name: 'ag_sound_fx_state',
    category: 'functional',
    purpose: 'Persists user audio interaction mute/unmute preferences across sessions.',
    provider: 'ALABSGOLD (First-party)',
    lifespan: '6 months',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(a) / NDPR Reg 2.1(a) Explicit Consent',
  },
  {
    name: 'ag_anon_metrics',
    category: 'analytics',
    purpose: 'Aggregates anonymous page load times, runtime latency, and responsive rendering metrics.',
    provider: 'ALABSGOLD (First-party internal telemetry)',
    lifespan: '90 days',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(a) / NDPR Reg 2.1(a) Explicit Consent',
  },
  {
    name: 'ag_error_telemetry',
    category: 'analytics',
    purpose: 'Collects anonymized script failure diagnostics to ensure high service availability.',
    provider: 'ALABSGOLD (First-party internal telemetry)',
    lifespan: '30 days',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(a) / NDPR Reg 2.1(a) Explicit Consent',
  },
  {
    name: 'ag_inquiry_source',
    category: 'marketing',
    purpose: 'Records discovery channel (e.g. LinkedIn, referral, direct) when submitting project scopes.',
    provider: 'ALABSGOLD (First-party)',
    lifespan: '30 days',
    type: 'Local Storage',
    legalBasis: 'GDPR Art. 6(1)(a) / NDPR Reg 2.1(a) Explicit Consent',
  },
];

/**
 * Retrieve current cookie preferences from storage
 */
export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    const parsed = JSON.parse(raw);
    return {
      necessary: true, // Invariant: Always true
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp || '',
      version: parsed.version || CURRENT_POLICY_VERSION,
      hasChosen: Boolean(parsed.hasChosen),
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
};

/**
 * Save updated cookie preferences and notify listeners
 */
export const saveCookiePreferences = (
  prefs: Partial<Omit<CookiePreferences, 'necessary'>>
): CookiePreferences => {
  const current = getCookiePreferences();
  const updated: CookiePreferences = {
    ...current,
    ...prefs,
    necessary: true, // Always locked to true
    hasChosen: true,
    timestamp: new Date().toISOString(),
    version: CURRENT_POLICY_VERSION,
  };

  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updated));
    // Trigger custom event for reactive UI updates
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: updated })
    );
  } catch (e) {
    console.warn('Failed to persist cookie consent preferences:', e);
  }

  return updated;
};

/**
 * Accept all categories (Full Consent)
 */
export const acceptAllCookies = (): CookiePreferences => {
  return saveCookiePreferences({
    functional: true,
    analytics: true,
    marketing: true,
  });
};

/**
 * Reject non-essential categories (Essential Only, equal ease of rejection per GDPR)
 */
export const rejectNonEssentialCookies = (): CookiePreferences => {
  return saveCookiePreferences({
    functional: false,
    analytics: false,
    marketing: false,
  });
};

/**
 * Reset consent preferences (e.g., to re-trigger prompt)
 */
export const resetCookiePreferences = (): void => {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: DEFAULT_PREFERENCES })
    );
  } catch (e) {
    console.warn('Failed to reset cookie consent:', e);
  }
};

/**
 * Check if a specific cookie category has been granted permission
 */
export const isCategoryAllowed = (category: CookieCategory): boolean => {
  if (category === 'necessary') return true;
  const prefs = getCookiePreferences();
  return Boolean(prefs.hasChosen && prefs[category]);
};
