export interface Pago {
    id: number;
    id_usuario: number;
    monto: number;
    metodo: string;
    estado: string;
    fecha_pago: Date;
  }