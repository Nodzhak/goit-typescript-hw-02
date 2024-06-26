/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentTitle {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentTitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};