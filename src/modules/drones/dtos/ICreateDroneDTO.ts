export default interface ICreateDroneDTO {
  customer_image: string,
  customer_name: string,
  customer_address: string,
  battery: number,
  max_speed: number,
  average_speed: number,
  status: string,
  current_fly: number
}