
### React Lifecle Methods (React v.16.9.0) 

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
- dep: ComponentWillReceiveProps(nextProps)
- shouldComponentUpdate(nextProps, nextState)
- dep: componentWillUpdate(nextProps, nextState)
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate(prevProps, prevState)

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
- props
- state
