import { useUser } from "./hooks/useUser";
import { useSupabase } from "./hooks/useSupabase";


function App() {   
  const { claims, setClaims } = useUser(); 
  const supabase = useSupabase();

  return (
    <>
      <div>
        {!claims && <button onClick={ async ()=>{
           await supabase.auth.signInWithWeb3({
            chain: 'solana',
            statement: "I confirm I want to signin to prediction market",
          })}
          // console.log(supabase);
        }> Sign In with Solana</button>}

        {claims && <button onClick={ async ()=>{
          await supabase.auth.signOut();
          setClaims(null);
          console.log("hi");
        }}>
          Logout </button>}
      </div>
    </>
  )
}

export default App
