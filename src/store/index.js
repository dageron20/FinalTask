import { LoginUser, userId, getTask, getComment, getTasks, addTask, deleteTask, getUsers, getAllUsers } from "../api";
const { makeAutoObservable, onBecomeObserved, computed } = require("mobx");


class UserStore {
    data = [];
    curUserData = { };
    UserData = {};
    allUsers = [];
    profilUser = {};
    pagination = {limit:8, page:0, total:0};
    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
            curUserData: computed,
        })

        onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
      const response = yield getUsers(this.pagination.page);
      this.data  = response.data;
      this.data.map(item => {this.usersList[item.id] = item.username});
      this.pagination.total = response.total;
    }

    *allUsersFetch() {
      const response = yield getAllUsers();
      response.map(item => {this.allUsers[item.id] = item.username});
    }

    *userLogin(data) {
        const response = yield LoginUser(data);
        this.UserData = response;
        if(this.UserData.id) {
            localStorage.setItem('IdUser', this.UserData.id);
            localStorage.setItem('PasswordUser', data.password);
        }
    }

    *userId(id) {
        const response = yield userId(id);
        this.UserData = response;
    }


}


class TasksStore {
    data = [];
    currentTask ={};
    filtredData = [];
    currentComments = [];
    pagination = {limit:8, page:0, total:0};
    constructor () {
      makeAutoObservable(this,{},{
        autoBind: true,
        getTask: computed,
      })
      onBecomeObserved(this, 'filtredData', this.fetch);
    }
  
    *fetch() {
        const response = yield getTasks(this.preFiltredData,this.pagination.page);
        this.filtredData = response.data;
        this.pagination.total = response.total;
        this.data = response.data;
        this.currentTask = {};
    }
  
    *addTask(data){
      yield addTask(data);
      yield this.fetch();
    }
  
    *getTask(id){
      const response = yield getTask(id);
      this.currentTask = response;
      const res  = yield getComment(this.currentTask.id)
      this.currentComments = res;
    }
  
    *deleteTask(id){
      yield deleteTask(id);
      yield this.fetch();
    }

    *addComment(data) {
      yield this.addComment(data);
    }

    *changeStatus(id, status) {
      yield this.changeStatus(id, status);
      yield this.fetch();
      yield this.getTask(id);
    }
  
  
  }


export const user = new UserStore();
export const task = new TasksStore();