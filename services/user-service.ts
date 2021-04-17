import {Service, Inject} from 'typedi';
import UserModel from '../models/user';

export default class UserService {
    constructor(
        @Inject('mockDomain') private mockDomain
    ){}

    async SaveData(){

    }
}