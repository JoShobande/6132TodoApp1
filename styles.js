// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    justifyContent: 'space-between', 
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
    justifyContent: 'flex-start',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
    textAlign: 'left',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteIcon: {
    color: 'red',
    fontSize: 24,
  },
  statusText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});
