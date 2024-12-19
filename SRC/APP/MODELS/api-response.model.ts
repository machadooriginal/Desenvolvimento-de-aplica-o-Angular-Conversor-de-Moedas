export interface ApiResponse {
    taxas_de_conversão: { [s: string]: unknown; } | ArrayLike<unknown>;
    conversion_rates: { [key: string]: number };
  }
  
