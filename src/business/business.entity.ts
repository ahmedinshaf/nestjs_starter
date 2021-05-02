import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Business {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  currency: string;

  @Column()
  timeZone: string;

  @Column()
  local: string;

  @Column()
  productSku: string;

  @Column()
  loyaltyPoints: string;
  
  @Column()
  giftCards: string;

  @Column()
  storeCredits: string;

  @Column()
  printRecipt: string;

  @Column()
  emailCustomer: string;

  @Column()
  logo: string;
}
