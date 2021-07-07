import Model, { attr } from '@ember-data/model';
import { action } from '@ember/object';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean') value;
  @attr('string') stmt;
  
  
  @action
  changVal(){
	  if(this.value == false){
		  this.value = true;
		  this.stmt = "User Archived";
	  }else {
		   this.value = false;
		   this.stmt = "";
	  };
  }
}
