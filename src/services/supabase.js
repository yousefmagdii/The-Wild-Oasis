import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dyvzqqdpgkwquizcplww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnpxcWRwZ2t3cXVpemNwbHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTMyNzksImV4cCI6MjAxOTk2OTI3OX0.Lz3CqOSE_OvqQVqB-QmfhQ8Jb3dL9R_Yq9yECeYtYiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
