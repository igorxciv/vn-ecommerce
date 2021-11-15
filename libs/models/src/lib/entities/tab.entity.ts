import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tabs')
export class TabEntity {
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

	@Column({ update: false, default: new Date() })
	createdAt: Date;

	@Column({ default: new Date() })
	updatedAt: Date;

	// @Column('json', { nullable: true })
	// flavors: string[];
}
