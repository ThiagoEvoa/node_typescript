import MessageDTO from "../model/dto/message_dto";

interface IRepository {
    retrieveMessage(): MessageDTO;
}

export default IRepository;