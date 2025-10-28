export type AcademicLevel = 'undergraduate' | 'postgraduate' | 'diploma' | string;
export type ModeOfStudy = 'full_time' | 'part_time' | 'distance' | string;

export interface Step1Payload {
  academic_level: string;
  faculty: string;
  department: string;
  program_name: string;
  mode_of_study: string;
}

export interface RegisterPayload {
  full_name: string;
  email: string;
  phone?: string;
  password: string;
  confirm_password: string;
}
