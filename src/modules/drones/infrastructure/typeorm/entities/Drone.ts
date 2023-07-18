import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drones')
class Drone {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  customer_image: string;

  @Column('varchar')
  customer_name: string;

  @Column('varchar')
  customer_address: string;

  @Column('varchar')
  battery: number;

  @Column('varchar')
  max_speed: number;

  
  @Column('varchar')
  average_speed: number;

  
  @Column('varchar')
  status: string;

  
  @Column('varchar')
  current_fly: number;

}

export default Drone;