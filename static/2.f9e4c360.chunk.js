webpackJsonp([2],{1037:function(n,o,d){var l=d(0),i=d(58),e=d(22).PageRenderer;e.__esModule&&(e=e.default);var r=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:d(1054)}},componentWillMount:function(){},render:function(){return l.createElement(e,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,n.exports=r},1054:function(n,o){n.exports='### Modal\n\n```react\nresponsive: true\n---\n<TransitionGroup component={Backdrop} appear>\n    <CSSTransition\n      classNames="modal"\n      timeout={{ appear: 300, enter: 300, exit: 100 }}\n    >\n        <Modal>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n        </Modal>\n    </CSSTransition>\n</TransitionGroup>\n```\n\n### Modal without close icon\n\n```react\nresponsive: true\n---\n\n<TransitionGroup component={Backdrop} appear>\n    <CSSTransition\n      classNames="modal"\n      timeout={{ appear: 300, enter: 300, exit: 100 }}\n    >\n        <Modal withCloseIcon={false}>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n        </Modal>\n    </CSSTransition>\n</TransitionGroup>\n```\n\n### Modal with custom padding on content\n\n```react\nresponsive: true\n---\n\n<TransitionGroup component={Backdrop} appear>\n    <CSSTransition\n      classNames="modal"\n      timeout={{ appear: 300, enter: 300, exit: 100 }}\n    >\n        <Modal contentProps={{ style: { padding: "16px 40px 32px 0"}}}>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n        </Modal>\n    </CSSTransition>\n</TransitionGroup>\n```\n\n### Modal with custom padding on container\n\n```react\nresponsive: true\n---\n\n<TransitionGroup component={Backdrop} appear>\n    <CSSTransition\n      classNames="modal"\n      timeout={{ appear: 300, enter: 300, exit: 100 }}\n    >\n        <Modal containerProps={{ style: { padding: "50px 8px 32px 60px"}}}>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n            <div>Hello World</div>\n        </Modal>\n    </CSSTransition>\n</TransitionGroup>\n```\n'}});
//# sourceMappingURL=2.f9e4c360.chunk.js.map