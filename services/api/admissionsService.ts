import { apiFetch } from './client';
import type { Step1Payload } from './types';

const STEP1_PATH = '/api/v1/admission/application/steps/program-choice/';

const STEP2_PATH = '/api/v1/admission/application/steps/personal-info/';

/**
 * Submit program choice (step 1) payload.
 * @param payload Step1Payload
 * @returns parsed JSON response from the API
 */
export async function submitProgramChoice(payload: Step1Payload) {
  return apiFetch(STEP1_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

/**
 * Submit personal info (step 2) payload.
 * @param payload Record<string, any>
 * @returns parsed JSON response from the API
 */
export async function submitPersonalInfo(payload: Record<string, unknown>) {
  return apiFetch(STEP2_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

const STEP3_PATH = '/api/v1/admission/application/steps/academic-info/';

/**
 * Submit academic info (step 3) payload.
 * @param payload Record<string, unknown>
 */
export async function submitAcademicInfo(payload: Record<string, unknown>) {
  return apiFetch(STEP3_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}


const STEP_DOCS_PATH = '/api/v1/admission/application/steps/document-upload/';

/**
 * Upload documents for step 4. Accepts FormData which should contain
 * one or more files under the key 'documents'.
 */
export async function uploadDocuments(formData: FormData) {
  return apiFetch(STEP_DOCS_PATH, {
    method: 'POST',
    body: formData,
    // Do not set Content-Type here; apiFetch will not set it for FormData
  });
}

const STEP_PAYMENT_PATH = '/api/v1/admission/application/steps/payment/';

/**
 * Get available payment gateways and their initialize URLs.
 */
export async function getPaymentGateways() {
  return apiFetch(STEP_PAYMENT_PATH, {
    method: 'GET',
  });
}

/**
 * Initialize a payment by POSTing to the payment gateway initialize URL.
 * The gatewayUrl is expected to be an absolute URL returned by the API.
 */
export async function initializePayment(gatewayUrl: string, payload: Record<string, unknown>) {
  // Build headers including Authorization when available
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(gatewayUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const bodyText = await res.text();
    throw new Error(`Payment init error ${res.status}: ${bodyText}`);
  }
  return res.json();
}

const STEP_REVIEW_PATH = '/api/v1/admission/application/steps/review-submit/';

/**
 * Get review & submit data for the current application
 */
export async function getReviewSubmit() {
  return apiFetch(STEP_REVIEW_PATH, { method: 'GET' });
}

const USER_NAME_PATH = '/api/v1/admission/user-name/';

/**
 * Get the current user's display name for admissions pages
 */
export async function getUserName() {
  return apiFetch(USER_NAME_PATH, { method: 'GET' });
}

const SUBMIT_PATH = '/api/v1/admission/application/submit/';

/**
 * Submit the current application. Returns the server response which is
 * expected to include an application id (e.g., { application_id: '...' }).
 */
export async function submitApplication() {
  return apiFetch(SUBMIT_PATH, { method: 'POST' });
}

const SUMMARY_PATH = '/api/v1/admission/summary/';

/**
 * Get application summary including application_id
 */
export async function getApplicationSummary() {
  return apiFetch(SUMMARY_PATH, { method: 'GET' });
}

const NOTIFICATIONS_PATH = '/api/v1/admission/notifications/';

/**
 * Fetch all admissions notifications.
 */
export async function getAdmissionNotifications() {
  return apiFetch(NOTIFICATIONS_PATH, { method: 'GET' });
}



const TRANSACTIONS_PATH = '/api/v1/admission/transactions/';
/**
 * Fetch all admission transactions.
 */
export async function getAdmissionTransactions() {
  return apiFetch(TRANSACTIONS_PATH, { method: 'GET' });
}


const PAYMENTS_PATH = '/api/v1/admission/payment/';
/**
 * Fetch all admission payments.
 */
export async function getAdmissionPayments() {
  return apiFetch(PAYMENTS_PATH, { method: 'GET' });
}
