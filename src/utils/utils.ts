export function formatMoney(number: number): string {
  return new Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}
