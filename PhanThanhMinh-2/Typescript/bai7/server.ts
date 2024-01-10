import { createServer } from 'json-server';

const server = createServer();
const port = 3000;

// Thêm endpoint mới cho danh sách người dùng
server.get('/users', (_, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Alice' }
    ];
    res.json(users);
});

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
```