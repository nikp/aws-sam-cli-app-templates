import { AWSEvent } from './aWSEvent';
import {deserialize, serialize} from 'class-transformer';

export class Marshaller{

    /**
     * marshal
     */
    public marshal(obj) {
        return serialize(obj)
    }

    /**
     * unmarshal
     */
    public unmarshal(data) {
        return deserialize(AWSEvent, data)
    }
}
