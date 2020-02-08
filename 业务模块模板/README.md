
# 业务模块说明

* components: 本模块使用到的组件
* container: 负责发送请求 && 处理页面事件
* dataflow: 本模块 redux 相关 ( reducer 需要到 src/dataflow/reducer/Reducer.js 里的 rootReducer 中进行注册)
* task:

  1.本模块中用到的接口请求 ( task 需要到 src/main/manager/TaskManager.js 中进行注册 )
  2.TaskExecutor: 负责处理转换响应数据

* utilities: 编写本模块中的业务逻辑 && 字典转换
* view: 页面渲染
