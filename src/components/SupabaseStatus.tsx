
import { useSupabase } from '@/hooks/useSupabase';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export const SupabaseStatus = () => {
  const { isConnected, error } = useSupabase();

  if (isConnected === null) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm">Supabase kontrol ediliyor...</span>
      </div>
    );
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm">Supabase bağlı</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-red-600">
      <XCircle className="h-4 w-4" />
      <span className="text-sm">Supabase bağlantı hatası</span>
      {error && (
        <span className="text-xs text-muted-foreground">({error})</span>
      )}
    </div>
  );
};
