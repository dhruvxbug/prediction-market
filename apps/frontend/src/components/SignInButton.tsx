import { useSupabase } from "../hooks/useSupabase"
import { useWallet } from '@solana/wallet-adapter-react';
import {  WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

export function SignInButton() {
  const wallet = useWallet();
  const { claims } = useUser();
  const supabase = useSupabase();

  useEffect(()=>{
     const syncAuth = async ()=>{
        if(wallet.connected && !claims){
          try{
              await supabase.auth.signInWithWeb3({
                chain: 'solana',
                statement: 'I accept the Terms of Service and want to register'
              });
          } catch (error){
              console.error("User rejected the supabase signature");
              wallet.disconnect();
          }
        }

        if(!wallet.connected && claims){
            await supabase.auth.signOut();
        }
     };

     syncAuth();
  }, [wallet.connected, claims, supabase, wallet])

  return (
    <>
      <WalletMultiButton/>
    </>
  )
}
