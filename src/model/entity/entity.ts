import Dto from "../dto/dto";

class Entity {
    message: string;

    constructor(message: string,) {
        this.message = message;
    }

    toEntity(dto: Dto): Entity {
        return new Entity(dto.message);
    }
}

export default Entity;