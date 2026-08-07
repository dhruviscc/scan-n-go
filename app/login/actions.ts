'use server';

import { createClient } from '@/lib/server';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  // Fetch the role from the user's profile
  const userId = data.user.id;
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', userId).single();
  const userRole = profile?.role?.toLowerCase() || 'user';

  if (userRole === 'admin' || userRole === 'staff') {
    redirect('/admin/dashboard');
  } else {
    redirect('/user/dashboard');
  }
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
