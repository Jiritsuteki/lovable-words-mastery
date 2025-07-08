
import { useState, useEffect } from 'react';

// Supabase bağlantısını test etmek için basit bir hook
export const useSupabase = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Supabase bağlantısını kontrol et
    const checkSupabaseConnection = async () => {
      try {
        // Eğer Supabase entegrasyonu varsa burada test edilecek
        // Şimdilik placeholder olarak bırakıyorum
        console.log('Supabase bağlantısı kontrol ediliyor...');
        
        // Gerçek Supabase URL'si varsa buraya eklenecek
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (!supabaseUrl || !supabaseKey) {
          setError('Supabase konfigürasyonu bulunamadı. Lütfen Supabase entegrasyonunu aktifleştirin.');
          setIsConnected(false);
          return;
        }
        
        // Basit bir health check
        const response = await fetch(`${supabaseUrl}/rest/v1/`, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });
        
        if (response.ok) {
          setIsConnected(true);
          console.log('✅ Supabase bağlantısı başarılı!');
        } else {
          throw new Error('Supabase API yanıt vermiyor');
        }
      } catch (err) {
        console.error('❌ Supabase bağlantı hatası:', err);
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
        setIsConnected(false);
      }
    };

    checkSupabaseConnection();
  }, []);

  return { isConnected, error };
};
