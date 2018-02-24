function GlobalData(){

	var date = new Date();

	this._name = '丁祥';
	this._time = date.getTime();
}

GlobalData.prototype={

	get user(){ return this._name },
	set user( str ){

		// consol.log(12);

		// console.error('s');

		console.log( this._time + '将用户名' + this._name + '修改为' + str );

		this._name = str;

		console.log( str+'s' );
	}

}

var dx = new GlobalData();


export default dx;