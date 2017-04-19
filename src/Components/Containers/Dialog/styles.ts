import styled from 'styled-components'

export const Dialog = styled.div`
.pt-dialog {
  opacity: 1;
  -webkit-transform: translateX(50%) scale(1);
          transform: translateX(50%) scale(1);
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  position: absolute;
  top: 25%;
  right: 50%;
  z-index: 20;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background: #ebf1f5;
  width: 500px;
  padding-bottom: 20px; }
  .pt-dialog.pt-overlay-enter, .pt-dialog.pt-overlay-appear {
    opacity: 0;
    -webkit-transform: translateX(50%) scale(0.5);
            transform: translateX(50%) scale(0.5); }
  .pt-dialog.pt-overlay-enter-active, .pt-dialog.pt-overlay-appear-active {
    opacity: 1;
    -webkit-transform: translateX(50%) scale(1);
            transform: translateX(50%) scale(1);
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
    transition-delay: 0; }
  .pt-dialog.pt-overlay-leave {
    opacity: 1;
    -webkit-transform: translateX(50%) scale(1);
            transform: translateX(50%) scale(1); }
  .pt-dialog.pt-overlay-leave-active {
    opacity: 0;
    -webkit-transform: translateX(50%) scale(0.5);
            transform: translateX(50%) scale(0.5);
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
    transition-delay: 0; }
  .pt-dialog:focus {
    outline: 0; }
  .pt-dialog.pt-dark,
  .pt-dark .pt-dialog {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background: #293742;
    color: #f5f8fa; }

.pt-dialog-header {
  display: -webkit-flex;
  display: flex;
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  -webkit-align-items: center;
          align-items: center;
  border-radius: 6px 6px 0 0;
  box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);
  background: #ffffff;
  min-height: 40px;
  padding-left: 20px; }
  .pt-dialog-header .pt-icon-large {
    -webkit-flex: 0 0 auto;
            flex: 0 0 auto;
    margin-right: 10px;
    color: #5c7080; }
  .pt-dialog-header h5 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
    margin: 0;
    line-height: inherit; }
    .pt-dialog-header h5:last-child {
      margin-right: 20px; }
  .pt-dark .pt-dialog-header {
    box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);
    background: #30404d; }
    .pt-dark .pt-dialog-header .pt-icon-large {
      color: #bfccd6; }
    .pt-dark .pt-dialog-header h5 {
      color: #f5f8fa; }

.pt-dialog-close-button {
  line-height: 1;
  font-family: "Icons20", sans-serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #5c7080;
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px; }
  .pt-dialog-close-button:hover {
    color: #182026; }
  .pt-dark .pt-dialog-close-button {
    color: #bfccd6; }
    .pt-dark .pt-dialog-close-button:hover {
      color: #f5f8fa; }

.pt-dialog-body {
  -webkit-flex: 1 1 auto;
          flex: 1 1 auto;
  margin: 20px;
  line-height: 18px; }

.pt-dialog-footer {
  -webkit-flex: 0 0 auto;
          flex: 0 0 auto;
  margin: 0 20px; }

.pt-dialog-footer-actions {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
          justify-content: flex-end; }
  .pt-dialog-footer-actions .pt-button {
    margin-left: 10px; }
`