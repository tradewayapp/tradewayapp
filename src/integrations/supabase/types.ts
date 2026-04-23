export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      kyc_records: {
        Row: {
          aadhaar_back_url: string | null
          aadhaar_front_url: string | null
          status: string | null
          submitted_at: string | null
          user_id: string
        }
        Insert: {
          aadhaar_back_url?: string | null
          aadhaar_front_url?: string | null
          status?: string | null
          submitted_at?: string | null
          user_id: string
        }
        Update: {
          aadhaar_back_url?: string | null
          aadhaar_front_url?: string | null
          status?: string | null
          submitted_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kyc_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      network_tree: {
        Row: {
          created_at: string | null
          id: string
          level: string | null
          referee_id: string | null
          referrer_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          level?: string | null
          referee_id?: string | null
          referrer_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          level?: string | null
          referee_id?: string | null
          referrer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "network_tree_referee_id_fkey"
            columns: ["referee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "network_tree_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          created_at: string | null
          district: string | null
          full_name: string | null
          gender: string | null
          id: string
          is_admin: boolean | null
          is_verified: boolean | null
          my_referral_code: string | null
          referred_by_code: string | null
          state: string | null
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          district?: string | null
          full_name?: string | null
          gender?: string | null
          id: string
          is_admin?: boolean | null
          is_verified?: boolean | null
          my_referral_code?: string | null
          referred_by_code?: string | null
          state?: string | null
        }
        Update: {
          age?: number | null
          created_at?: string | null
          district?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          is_admin?: boolean | null
          is_verified?: boolean | null
          my_referral_code?: string | null
          referred_by_code?: string | null
          state?: string | null
        }
        Relationships: []
      }
      trades: {
        Row: {
          entry_price: string | null
          execution_time: string | null
          exit_price: string | null
          id: string
          lot_size: string | null
          pair: string
          pnl_inr: number | null
          pnl_usd: number | null
          trade_status: string | null
          type: string | null
        }
        Insert: {
          entry_price?: string | null
          execution_time?: string | null
          exit_price?: string | null
          id?: string
          lot_size?: string | null
          pair: string
          pnl_inr?: number | null
          pnl_usd?: number | null
          trade_status?: string | null
          type?: string | null
        }
        Update: {
          entry_price?: string | null
          execution_time?: string | null
          exit_price?: string | null
          id?: string
          lot_size?: string | null
          pair?: string
          pnl_inr?: number | null
          pnl_usd?: number | null
          trade_status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount_inr: number | null
          amount_usd: number | null
          created_at: string | null
          id: string
          proof_url: string | null
          status: string | null
          type: string | null
          user_id: string | null
          utr_number: string | null
        }
        Insert: {
          amount_inr?: number | null
          amount_usd?: number | null
          created_at?: string | null
          id?: string
          proof_url?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
          utr_number?: string | null
        }
        Update: {
          amount_inr?: number | null
          amount_usd?: number | null
          created_at?: string | null
          id?: string
          proof_url?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
          utr_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          capital_usd: number | null
          last_updated: string | null
          profit_usd: number | null
          referral_earnings_usd: number | null
          total_withdrawn_usd: number | null
          user_id: string
        }
        Insert: {
          capital_usd?: number | null
          last_updated?: string | null
          profit_usd?: number | null
          referral_earnings_usd?: number | null
          total_withdrawn_usd?: number | null
          user_id: string
        }
        Update: {
          capital_usd?: number | null
          last_updated?: string | null
          profit_usd?: number | null
          referral_earnings_usd?: number | null
          total_withdrawn_usd?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_daily_referral_commissions: { Args: never; Returns: undefined }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
