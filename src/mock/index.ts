import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
// 创建一个 MockAdapter 实例
let mock = new MockAdapter(axios)

const initMock = () => {
  // mock模拟一个get方法的响应数据
  mock.onGet('/getTreeData').reply(200, { // 200 为状态码，后面对象为返回data
    treeData: [
        {
          label: "Level one 1",
          id:'1',
          children: [
            {
              label: "Level two 1-1",
              id:'1-1',
              children: [
                {
                  label: "Level three 1-1-1",
                  id:'1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          id:'2',
          children: [
            {
              label: "Level two 2-1",
              id:'2-1',
              children: [
                {
                  label: "Level three 2-1-1",
                  id:'2-1-1',
                },
              ],
            },
            {
              label: "Level two 2-2",
              id:'2-2',
              children: [
                {
                  label: "Level three 2-2-1",
                  id:'2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          id:'3',
          children: [
            {
              label: "Level two 3-1",
              id:'3-1',
              children: [
                {
                  label: "Level three 3-1-1",
                  id:'3-1-1',
                },
              ],
            },
            {
              label: "Level two 3-2",
              id:'3-2',
              children: [
                {
                  label: "Level three 3-2-1",
                  id:'3-2-1',
                },
              ],
            },
          ],
        },
      ]
  })

  //
  mock.onGet('/getTableData').reply(200, { // 200 为状态码，后面对象为返回data
    tableData: [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]
  })
  // mock模拟一个post方法的响应数据
  mock.onPost('/foo').reply(200, { // 200 为状态码，后面对象为返回data
    msg: 'success',
    desc: "恭喜，请求成功！"
  })

  // 模拟一个带参数请求的响应
  mock.onGet("/search", { params: { searchText: "张" } }).reply(200, {
    users: [{ id: 1, name: "张小花" }],
  });

  // 模拟一个错误响应
  mock.onPut('/api/users/1').networkError();


}

// 导出
export default initMock