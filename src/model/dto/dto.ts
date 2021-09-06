import Entity from "../entity/entity";

class Dto extends Entity {
    constructor(message: string) {
        super(message);
    }

    toDTO(entity: Entity): Dto {
        return new Dto(entity.message);
    }
}

export default Dto;