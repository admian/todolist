import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props){
     super(props);
     this.state={
       inputValue:'',
       list:[]
        /*  '2018-10-1 目的地-凤凰古城',
         '2018-5-1  目的地-看大海',
         '2018-3-5 目的地-深圳' */
     };
     this.handleBtnClick=this.handleBtnClick.bind(this); //在不指名setState的this的指向时，会报错：this is undfined
     this.textChanged=this.textChanged.bind(this);
    // this.handleDelete=this.handleDelete.bind(this);
  }

//点击ADD增加list
  handleBtnClick(){
    this.setState({     
      //错误想法：this.list.push(...this.state.list,'2017-12-13 目的地-蛋糕店')
      //正确写法
      //list:[...this.state.list,'2017-12-13 目的地-蛋糕店']
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  //文本框的值--输入改变 保存改变值 target.value
  //target属性返回触发事件的目标节点
  textChanged(event){
      //console.log(event.target.value)
      this.setState({
          inputValue:event.target.value
      }) 
  }

  //删除
  handleDelete(index){
      console.log(index);
      //拿到list的副本
       const list=[...this.state.list];
      list.splice(index,1);
      this.setState({
        list
      }) 
  }
  //组件要显示的内容
  render() {
    return (
      <div>
          <div className="bg-elment">
            <input value={this.state.inputValue} className='text-input'onChange={this.textChanged}/>
            <button className='btn' onClick={this.handleBtnClick}>ADD</button>
          </div> 
          <ul>
             {
               //map()  在react用map()遍历   onClick={}
                this.state.list.map((item,index)=>{
                  return (<li key={index}><label>{item}</label><button className='delBtn' onClick={this.handleDelete.bind(this,index)}>x</button></li>);
                })
              }
          </ul>
     </div>
   );
   
  }
}

export default TodoList;
