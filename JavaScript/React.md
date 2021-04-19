
## React Lifecle Methods (React v.16.9.0) 

### Mounting 

- constructor()
- static getDerivedStateFromProps()
- dep: componentWillMount() - only run 1 time 
- rennder() - is the only required method in a class component.
- componentDidMount() - only run 1 time

### Unmounting 

- ComponentWillUnmount()

### Updating

- static getDerivedStateFromProps()
- dep:   ComponentWillReceiveProps( nextProps )
- shouldComponentUpdate( nextProps, nextState )
- dep:   componentWillUpdate( nextProps, nextState )
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate( prevProps, prevState )

### Error handling

- static getDerivedStateFromError()
- componentDidCatch()

### Other APIs

setState()
forceUpdate()

### Class Properties

- defaultProps
- displayName

### Instance Properties (Свойства екземпляра )

- **props** - не изменяемый тип, даные которые мы получаем из других компонентов
Передается компоненту как параметрер функции

- **state** - тоже желательно не изменять, а только дополнять, если Реак замечает изменяние в state, будет перерендерина страница
Управляется внутри компонента, инициализируеться в конструкторе в первую очередь

### React Hooks

Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов. Хуки не работают внутри классов — они дают вам возможность использовать React без классов.

Хуки позволяют использовать состояние и другие возможности React без написания классов.Они предоставляют более прямой доступ к API уже знакомых вам понятий: пропсов, состояния, контекста, рефов, и жизненного цикла. 

Хуки позволяют вам повторно использовать логику состояния, не затрагивая дерево компонентов. С их помощью один компонент можно разбить на маленькие функции по их назначению (например, подписке или загрузке данных), а не на основе методов жизненного цикла. Вы также можете контролировать внутреннее состояние с помощью редюсера, чтобы поведение было более предсказуемым.

```javascript
import React, { useState } from 'react';

function Example() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}
```

Хуки позволяют вам повторно использовать логику состояния, не затрагивая дерево компонентов. С их помощью один компонент можно разбить на маленькие функции по их назначению (например, подписке или загрузке данных), а не на основе методов жизненного цикла. Вы также можете контролировать внутреннее состояние с помощью редюсера, чтобы поведение было более предсказуемым.

### React HOC (Higher Order Component)

Компонент вышего порядка
