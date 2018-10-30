import * as React from "react"
import * as ReactDOM from "react-dom"

/**
 * @description CKEditor component to render a CKEditor textarea with defined configs and onChange callback handler
 */
export interface CKEditorProps {
    isScriptLoaded? : boolean;
    config:object;
    scriptUrl?:string;
    content:any;
    className?:string;
    onChange:(data) => void;
}

export interface CKEditorState {
    isScriptLoaded : boolean;
    config:any;
}

export default class CKEditor extends React.Component<CKEditorProps, CKEditorState> {
    editorInstance : any ;

    public static defaultProps : CKEditorProps = {
        content: "",
        config: {
            language: 'fr',
            enterMode: 2,
            shiftEnterMode: 1,
            height: 60,
            skin: 'office2013',
            resize_enabled: false,
            toolbarCanCollapse: true,
            toolbarStartupExpanded: false,
            autoGrow_onStartup: true,
            autoGrow_minHeight: 60,
            autoGrow_maxHeight: 600,
            autoGrow_bottomSpace: 10,
            startupFocus: false,
            removePlugins: 'elementspath',
            toolbar:
                [
                    ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'],
                    ['TextColor', 'BGColor'],
                    ['HorizontalRule', 'SpecialChar'],
                    ['Bold', '-', 'Italic', '-', 'Underline', '-', 'Strike', '-', 'Subscript', '-', 'Superscript', '-', 'RemoveFormat'],
                    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                    ['NumberedList', 'BulletedList', '-', 'Table']
                ]
        },
        isScriptLoaded: true,
        scriptUrl: "",
        onChange:(data) => {}
    };

    constructor(props) {
        super(props);

        //Bindings
        this.onLoad = this.onLoad.bind(this);

        //State initialization
        this.state = {
            isScriptLoaded: this.props.isScriptLoaded,
            config: this.props.config
        };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    if(!this.props.isScriptLoaded){
      //loadScript(this.props.scriptUrl, this.onLoad);
    } else {
      this.onLoad();
    }
  }

  onLoad(){
    this.setState({
      isScriptLoaded: true
    });

    if (typeof(window['CKEDITOR']) != null) {
      console.error("CKEditor not found");
      return;
    }

    this.editorInstance = window['CKEDITOR'].appendTo(
      ReactDOM.findDOMNode(this),
      this.state.config,
      this.props.content
    );

    this.editorInstance.on("change", () => {
      const content = this.editorInstance.getData();

      //call callback if present
      if(this.props.onChange){
        this.props.onChange(content);
      }
    });
  }

  render() {
    return <div className={this.props.className} />;
  }
}