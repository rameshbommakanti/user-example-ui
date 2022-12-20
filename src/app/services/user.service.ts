import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
configUrl = 'http://localhost:8080/user';

constructor(private http: HttpClient) { }

getUsers() {
  return this.http.get(this.configUrl);
}
getUser(userId:any) {
  return this.http.get(this.configUrl+'/'+userId);
}
saveUser(data:any) {
  return this.http.post(this.configUrl,data);
}
updateUser(data:any) {
  return this.http.put(this.configUrl,data);
}
deleteUser(userId:any) {
  return this.http.delete(this.configUrl+'/'+userId);
}

}