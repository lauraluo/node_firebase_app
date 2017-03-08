(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

 
var MockComponent = React.createClass({displayName: "MockComponent",
	getInitialState: function(){
    	return {
    		initData: {}
    	};
    },
    componentWillMount: function(){
    	var _this = this;
		Mock.setup({
		    timeout: '200-600'
		});

		Mock.mock(/\.json/, {
		    'list|1-10': [{
		        'id|+1': 1,
		        'email': '@EMAIL'
		    }]
		});

		$.ajax({
		    url: 'hello.json',
		    dataType: 'json'
		}).done(function(data, status, jqXHR){
		    _this.setState({initData: data});
		});
    },
	render: function(){
		//more than one child
		var _this = this;
		var childrenWithProps =  React.Children.map(this.props.children, function(child){
			return React.cloneElement(child, {
				initData: _this.state.initData
				
			});
		});

		
		return React.createElement("div", null,  childrenWithProps )
	}
});

module.exports = MockComponent;






},{}],2:[function(require,module,exports){
 
var MyComponent = React.createClass({displayName: "MyComponent",
	propTypes: {
		initData: React.PropTypes.object
	},
	render: function(){
		var _this = this;
		var listItems = []

		if(_this.props.initData && _this.props.initData.list) {
			listItems = _this.props.initData.list.map(function(item,i){
			  return (React.createElement("li", {key: i}, 
			  	React.createElement("span", null, item.id), 
			  	React.createElement("span", null, item.email)
			  ))	
			});
		}
		
		return React.createElement("ul", null, listItems)
	}
});

module.exports = MyComponent;

},{}],3:[function(require,module,exports){
console.log("main.js load");

var MyComponent = require('./components/MyComponent');
var Mock = require('./components/MockComponent');


ReactDOM.render(
	React.createElement(Mock, null, 
		React.createElement(MyComponent, null)
	),
	document.getElementById('main')
);


},{"./components/MockComponent":1,"./components/MyComponent":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oc2lueWlsby9Eb2N1bWVudHMvbXlHaXQvbm9kZUZpcmViYXNlQXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L25vZGVGaXJlYmFzZUFwcC9jb250ZW50L2NvbXBvbmVudHMvTW9ja0NvbXBvbmVudC5qc3giLCIvVXNlcnMvaHNpbnlpbG8vRG9jdW1lbnRzL215R2l0L25vZGVGaXJlYmFzZUFwcC9jb250ZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQuanN4IiwiL1VzZXJzL2hzaW55aWxvL0RvY3VtZW50cy9teUdpdC9ub2RlRmlyZWJhc2VBcHAvY29udGVudC9mYWtlX2IwNzU3NGZkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxtQ0FBbUMsNkJBQUE7Q0FDdEMsZUFBZSxFQUFFLFVBQVU7S0FDdkIsT0FBTztNQUNOLFFBQVEsRUFBRSxFQUFFO01BQ1osQ0FBQztLQUNGO0lBQ0Qsa0JBQWtCLEVBQUUsVUFBVTtLQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNQLE9BQU8sRUFBRSxTQUFTO0FBQ3hCLEdBQUcsQ0FBQyxDQUFDOztFQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2hCLFdBQVcsRUFBRSxDQUFDO1VBQ1YsT0FBTyxFQUFFLENBQUM7VUFDVixPQUFPLEVBQUUsUUFBUTtPQUNwQixDQUFDO0FBQ1IsR0FBRyxDQUFDLENBQUM7O0VBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNILEdBQUcsRUFBRSxZQUFZO01BQ2pCLFFBQVEsRUFBRSxNQUFNO0dBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztNQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDcEMsQ0FBQyxDQUFDO0tBQ0E7QUFDTCxDQUFDLE1BQU0sRUFBRSxVQUFVOztFQUVqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDakIsSUFBSSxpQkFBaUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEtBQUssQ0FBQztHQUMvRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO0FBQ3BDLElBQUksUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUTs7SUFFOUIsQ0FBQyxDQUFDO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTDs7RUFFRSxPQUFPLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUMsQ0FBQyxrQkFBeUIsQ0FBQTtFQUN2QztBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQy9CO0FBQ0E7QUFDQTs7Ozs7QUM5Q0E7QUFDQSxJQUFJLGlDQUFpQywyQkFBQTtDQUNwQyxTQUFTLEVBQUU7RUFDVixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0VBQ2hDO0NBQ0QsTUFBTSxFQUFFLFVBQVU7RUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLEVBQUUsSUFBSSxTQUFTLEdBQUcsRUFBRTs7RUFFbEIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7R0FDckQsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELFFBQVEsb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxDQUFHLENBQUEsRUFBQTtNQUNuQixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxFQUFVLENBQUEsRUFBQTtNQUN0QixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFhLENBQUE7S0FDckIsQ0FBQSxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sR0FBRzs7RUFFRCxPQUFPLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUMsU0FBZSxDQUFBO0VBQzNCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXOzs7QUN0QjVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTVCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2pEOztBQUVBLFFBQVEsQ0FBQyxNQUFNO0NBQ2Qsb0JBQUMsSUFBSSxFQUFBLElBQUMsRUFBQTtFQUNMLG9CQUFDLFdBQVcsRUFBQSxJQUFFLENBQUE7Q0FDUixDQUFBO0NBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Q0FDL0IsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiBcbnZhciBNb2NrQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRpbml0RGF0YToge31cbiAgICBcdH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdE1vY2suc2V0dXAoe1xuXHRcdCAgICB0aW1lb3V0OiAnMjAwLTYwMCdcblx0XHR9KTtcblxuXHRcdE1vY2subW9jaygvXFwuanNvbi8sIHtcblx0XHQgICAgJ2xpc3R8MS0xMCc6IFt7XG5cdFx0ICAgICAgICAnaWR8KzEnOiAxLFxuXHRcdCAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcblx0XHQgICAgfV1cblx0XHR9KTtcblxuXHRcdCQuYWpheCh7XG5cdFx0ICAgIHVybDogJ2hlbGxvLmpzb24nLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nXG5cdFx0fSkuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGpxWEhSKXtcblx0XHQgICAgX3RoaXMuc2V0U3RhdGUoe2luaXREYXRhOiBkYXRhfSk7XG5cdFx0fSk7XG4gICAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdC8vbW9yZSB0aGFuIG9uZSBjaGlsZFxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGNoaWxkcmVuV2l0aFByb3BzID0gIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCl7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdGluaXREYXRhOiBfdGhpcy5zdGF0ZS5pbml0RGF0YVxuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0XG5cdFx0cmV0dXJuIDxkaXY+eyBjaGlsZHJlbldpdGhQcm9wcyB9PC9kaXY+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tDb21wb25lbnQ7XG5cblxuXG5cbiIsIiBcbnZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cHJvcFR5cGVzOiB7XG5cdFx0aW5pdERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIGxpc3RJdGVtcyA9IFtdXG5cblx0XHRpZihfdGhpcy5wcm9wcy5pbml0RGF0YSAmJiBfdGhpcy5wcm9wcy5pbml0RGF0YS5saXN0KSB7XG5cdFx0XHRsaXN0SXRlbXMgPSBfdGhpcy5wcm9wcy5pbml0RGF0YS5saXN0Lm1hcChmdW5jdGlvbihpdGVtLGkpe1xuXHRcdFx0ICByZXR1cm4gKDxsaSBrZXk9e2l9PlxuXHRcdFx0ICBcdDxzcGFuPntpdGVtLmlkfTwvc3Bhbj5cblx0XHRcdCAgXHQ8c3Bhbj57aXRlbS5lbWFpbH08L3NwYW4+XG5cdFx0XHQgIDwvbGk+KVx0XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIDx1bD57bGlzdEl0ZW1zfTwvdWw+XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE15Q29tcG9uZW50OyIsImNvbnNvbGUubG9nKFwibWFpbi5qcyBsb2FkXCIpO1xuXG52YXIgTXlDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQnKTtcbnZhciBNb2NrID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01vY2tDb21wb25lbnQnKTtcblxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxNb2NrPlxuXHRcdDxNeUNvbXBvbmVudC8+XG5cdDwvTW9jaz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbik7XG4iXX0=
