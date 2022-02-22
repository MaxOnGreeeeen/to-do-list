const initialState ={
    notes: [
        {title : 'sdfsdf', id : 1,description: 'fdgsgsdf sdfgsdf sdfgsdg'},
        {title : 'Меня зовут максим Андреевич',id : 2, description:'Мне 22 года'},
        {title : 'Fsdf',id : 3, description:'Привет Олег'},
        {title : 'sdfgsdfg',id : 4, description:'Hello world : println("heeeello world")'}
    ]
}
export const notesReducer = (state = initialState, action) =>{
    return state
}