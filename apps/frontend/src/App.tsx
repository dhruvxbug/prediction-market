import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { SignInButton } from "./components/SignInButton";

function App() {
  const endpoint = clusterApiUrl('devnet')
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <SignInButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App