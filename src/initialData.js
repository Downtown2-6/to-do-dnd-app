const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage'},
    'task-2': { id: 'task-2', content: 'Clean house'},
    'task-3': { id: 'task-3', content: 'Cry in corner'},
    'task-4': { id: 'task-4', content: 'got on walk '},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Complete',
      taskIds: [],
    },
  },
  //facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData
