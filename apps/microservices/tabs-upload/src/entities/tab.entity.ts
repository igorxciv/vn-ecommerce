import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tabs')
export class Tab {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	artist: string;

	@Column()
	track: string;

	@Column()
	complexity: number;

	@Column({ nullable: true })
	image: string;

	// @Column('json', { nullable: true })
	// flavors: string[];
}
