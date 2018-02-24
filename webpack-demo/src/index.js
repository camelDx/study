// import _ from 'lodash';

// 管理资源
// import './style.css';
// import imgUrl from './1.png';
// import configData from './data/config.xml';

// 管理输出
// import dx from './user.js';

// tree shakeing
import { cube } from './match.js';

if( process.env.NODE_ENV !== 'production' ){
  console.log('Looks like we are in development mode');
}


 function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');
       var element = document.createElement('pre');

   // Lodash, currently included via a script, is required for this line to work
   // Lodash，现在由此脚本导入
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // element.classList.add('hello');

    // 将图像添加到我们现有的 div。

    // var imgObj = new Image();
    // imgObj.src = imgUrl;

    // element.appendChild( imgObj );

    // console.log( configData )

    //2.管理输出
    // btn.innerHTML = '按钮';

    // btn.onclick = function(){
    // 	dx.user = 'dx';
    // }

    // element.appendChild( btn );
    element.innerHTML = [
        '开始tree shaking',
        '5的立方'+cube(5)
    ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
  // let element = component();        //当 user.js 改变导致页面重新渲染时，重新获取渲染的元素
  // document.body.appendChild( element );

  // if(module.hot){
  //   module.hot.accept('./user.js',function(){
  //       console.log( "热跟新user.js" );
  //       dx.user = '丁X';
        
  //       document.body.removeChild(element);
  //       element = component();      //重新渲染页面后，component更新click事件处理
  //       document.body.appendChild(element);
  //   })
  // }
