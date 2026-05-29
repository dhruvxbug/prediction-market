import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export function useSupabase(){
    const [supabase, setSupabase] = useState( createClient(
  "https://xeasbfgjjgaqeuzhmcvh.supabase.co",
  "sb_publishable_AQNhfaYzUfF_pvCcgSsboQ_-8GDW1u5"));

   return supabase;
} 