import { style, media } from "typestyle";

export const TitleStyles = style({
    $nest : {
        '& .small-box' : {
            borderRadius: "2px",
            position: "relative",
            display: "block",
            marginBottom: "20px",
            boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
        },
        '& .small-box > .inner' : {
            padding: "10px",
        },
        '& .small-box > .small-box-footer' : {
            position: "relative",
            textAlign: "center",
            padding: "3px 0",
            color: "rgba(255,255,255,0.8)",
            display: "block",
            zIndex: 10,
            background: "rgba(0,0,0,0.1)",
            textDecoration: "none",
        },
        '& .small-box > .small-box-footer:hover' : {
            color: "#fff",
            background: "rgba(0,0,0,0.15)"
        },
        '& .small-box h3' : {
            fontSize: "38px",
            fontWeight: "bold",
            margin: "0 0 10px 0",
            whiteSpace: "nowrap",
            padding: 0,
        },
        '& .small-box p' : {
            fontSize: '15px'
        },
        '& .small-box p > small' : {
            display: "block",
            color: "#f9f9f9",
            fontSize: "13px",
            marginTop: "5px"
        },
        '& .small-box h3, & .small-box p' : {
            zIndex: 5,
        },
        '& .small-box .icon' : {
            '-webkit-transition': 'all .3s linear',
            '-o-transition': 'all .3s linear',
            transition: 'all .3s linear',
            position: 'absolute',
            top: "-10px",
            right: "10px",
            zIndex: 0,
            fontSize: "90px",
            color: 'rgba(0,0,0,0.15)'
        },
        '& .small-box:hover' : {
            textDecoration: 'none',
            color: "#f9f9f9"
        },
        '& .small-box:hover .icon' : {
            fontSize: '95px'
        },
        '& .box' : {
            borderRadius: "4px",
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            backgroundColor: "#ffffff",
            border: 'solid 1px #eaeae9',
            marginBottom: "20px",
        },
        '& .box.box-primary' : {
            borderTopColor: "#3c8dbc"
        },
        '& .box.box-info' : {
            borderTopColor: "#00c0ef"
        },
        '& .box.box-danger' : {
            borderTopColor: "#dd4b39"
        },
        '& .box.box-warning' : {
            borderTopColor: "#f39c12"
        },
        '& .box.box-success' : {
            borderTopColor: "#00a65a"
        },
        '& .box.box-default' : {
            borderTopColor: "#d2d6de"
        },
        '& .box.collapsed-box .box-body,& .box.collapsed-box .box-footer' : {
            display: 'none'
        },
        '& .box .nav-stacked > li' : {
            borderBottom: '1px solid #f4f4f4',
            margin: 0,
        },
        '& .box .nav-stacked > li:last-of-type' : {
            borderBottom: 'none'
        },
        '& .box.height-control .box-body' : {
            maxHeight: "300px",
            overflow: 'auto'
        },
        '& .box .border-right' : {
            borderRight: '1px solid #f4f4f4',
        },
        '& .box .borderLeft' : {
            borderLeft: '1px solid #f4f4f4',
        },
        '& .box.box-solid' : {
            borderTop: '0px'
        },
        '& .box.box-solid > .box-header .btn.btn-default' : {
            background: 'transparent',
        },
        '& .box.box-solid > .box-header .btn:hover,& .box.box-solid > .box-header a:hover' : {
            background: 'rgba(0,0,0,0.1) !important',
        },
        '& .box.box-solid.box-default' : {
            border: '1px solid #d2d6de',
        },
        '& .box.box-solid.box-default > .box-header' : {
            color: "#444",
            background: "#d2d6de",
        },
        '& .box.box-solid.box-default > .box-header a,& .box.box-solid.box-default > .box-header .btn' : {
            color: "#444"
        },
        '& .box.box-solid.box-primary' : {
            border: '1px solid #3c8dbc',
        },
        '& .box.box-solid.box-primary > .box-header' : {
            color: "#fff",
            background: "#3c8dbc",
            backgroundColor: "#3c8dbc",
        },
        '& .box.box-solid.box-primary > .box-header a,& .box.box-solid.box-primary > .box-header .btn' : {
            color: "#fff"
        },
        '& .box.box-solid.box-info' : {
            border: '1px solid #00c0ef',
        },
        '& .box.box-solid.box-info > .box-header' : {
            color: "#fff",
            background: "#00c0ef",
            backgroundColor: "#00c0ef"
        },
        '& .box.box-solid.box-info > .box-header a,& .box.box-solid.box-info > .box-header .btn' : {
            color: "#fff",
        },
        '& .box.box-solid.box-danger' : {
            border: '1px solid #dd4b39',
        },
        '& .box.box-solid.box-danger > .box-header' : {
            color: "#fff",
            background: "#dd4b39",
            backgroundColor: "#dd4b39"
        },
        '& .box.box-solid.box-danger > .box-header a,& .box.box-solid.box-danger > .box-header .btn' : {
            color: "#fff"
        },
        '& .box.box-solid.box-warning' : {
            border: '1px solid #f39c12',
        },
        '& .box.box-solid.box-warning > .box-header' : {
            color: "#fff",
            background: "#f39c12",
            backgroundColor: "#f39c12"
        },
        '& .box.box-solid.box-warning > .box-header a,& .box.box-solid.box-warning > .box-header .btn' : {
            color: "#fff"
        },
        '& .box.box-solid.box-success' : {
            border: '1px solid #00a65a',
        },
        '& .box.box-solid.box-success > .box-header' : {
            color: "#fff",
            background: "#00a65a",
            backgroundColor: "#00a65a"
        },
        '& .box.box-solid.box-success > .box-header a,& .box.box-solid.box-success > .box-header .btn' : {
            color: "#fff"
        },
        '& .box.box-solid > .box-header > .box-tools .btn' : {
            border: "0",
            boxShadow: 'none',
        },
        '& .box.box-solid[class*="bg"] > .box-header' : {
            color: "#fff"
        },
        '& .box .box-group > .box' : {
            marginBottom: '5px'
        },
        '& .box .knob-label' : {
            textAlign: "center",
            color: "#333",
            fontWeight: 100,
            fontSize: "12px",
            marginBottom: "0.3em"
        },
        '& .box > .overlay, .overlay-wrapper > .overlay,& .box > .loading-img, .overlay-wrapper > .loading-img' : {
            position: 'absolute',
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
        },
        '& .box .overlay,& .overlay-wrapper .overlay' : {
            zIndex: 50,
            background: "rgba(255,255,255,0.7)",
            borderRadius: "3px",
        },
        '& .box .overlay > .fa,& .overlay-wrapper .overlay > .fa' : {
            position: 'absolute',
            top: "50%",
            left: "50%",
            marginLeft: "-15px",
            marginTop: "-15px",
            color: "#000",
            fontSize: '30px',
        },
        '& .box .overlay.dark,& .overlay-wrapper .overlay.dark' : {
            background: 'rgba(0,0,0,0.5)'
        },
        '& .box-header:before,& .box-body:before,& .box-footer:before,& .box-header:after,& .box-body:after,& .box-footer:after' : {
            content: " ",
            display: 'table',
        },
        '& .box-header:after,& .box-body:after,& .box-footer:after' : {
            clear: 'both',
        },
        '& .box-header' : {
            color: "#444",
            display: "block",
            padding: "10px",
            position: 'relative',
        },
        '& .box-header.with-border' : {
            borderBottom: '1px solid #f4f4f4'
        },
        '& .collapsed-box .box-header.with-border' : {
            borderBottom: 'none'
        },
        '& .box-header > .fa,& .box-header > .glyphicon,& .box-header > .ion,& .box-header .box-title' : {
            display: "inline-block",
            fontSize: "18px",
            margin: "0",
            lineHeight: 1
        },
        '& .box-header > .fa,& .box-header > .glyphicon,& .box-header > .ion' : {
            marginRight: '5px',
        },
        '& .box-header > .box-tools' : {
            position: 'absolute',
            right: "10px",
            top: '5px'
        },
        '& .box-header > .box-tools [data-toggle="tooltip"]' : {
            position: 'relative',
        },
        '& .box-header > .box-tools.pull-right .dropdown-menu' : {
            right: "0",
            left: 'auto'
        },
        '& .btn-box-tool' : {
            padding: "5px",
            fontSize: "12px",
            background: 'transparent',
            boxShadow: "none !important",
            color: "#97a0b3"
        },
        '& .open .btn-box-tool,& .btn-box-tool:hover' : {
            color: "#606c84"
        },
        '& .btn-box-tool:active' : {
            outline: "none !important"
        },
        '& .box-body' : {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "3px",
            borderBottomLeftRadius: "3px",
            padding: '10px',
        },
        '& .no-header .box-body' : {
            borderTopRightRadius: "3px",
            borderTopLeftRadius: '3px',
        },
        '& .box-body > .table' : {
            marginBottom: 0,
        },
        '& .box-body .fc' : {
            marginTop: '5px',
        },
        '& .box-body .full-width-chart' : {
            margin: '-19px'
        },
        '& .box-body.no-padding .full-width-chart' : {
            margin: '-9px'
        },
        '& .box-body .box-pane' : {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: '3px',
        },
        '& .box-body .box-pane-right' : {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "3px",
            borderBottomLeftRadius: 0,
        },
        '& .box-footer' : {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "3px",
            borderBottomLeftRadius: "3px",
            borderTop: '1px solid #f4f4f4',
            padding: "10px",
            backgroundColor: "#fff",
        },
        '& .box-input' : {
            maxWidth: "200px",
        },
        '& .box-up' : {
            borderTop: '3px solid rgb(0, 158, 197)',
        },
    }
}, media({ maxWidth: '767px'}, {
    $nest : {
        '& .small-box' : {
            textAlign: 'center'
        },
        '& .small-box.icon' : {
            display: 'none'
        },
        '& .small-box p' : {
            fontSize: '12px',
        }
    }
}));