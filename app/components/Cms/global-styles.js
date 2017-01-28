import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
:root {
  --color-main: #a2a2a2;
  --color-main-background-focus: #b0b0b0;
}

  .loading-block {
    min-height: 100px !important;
    margin: 14px !important;
  }

  .loading-block .dimmer {
    background: var(--color-main) !important;
  }

  .graphql-cms {
    padding: 14px !important;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    font-weight: 300 !important;
  }

  .graphql-cms label {
    color: black !important;
  }

  .graphql-cms .file-form {
    margin: 0 0 14px;
    padding: 0;
  }

  .graphql-cms .file-form .file-form-btn {
    margin: 0 !important;
    color: white !important;
  }

  .graphql-cms .file-form .file-form-btn i {
    color: white !important;
  }

  .graphql-cms .file-form .file-name {
    display: inline-block;
    margin-left: 10px;
  }

  .graphql-cms .github {
    padding: 5px !important;
  }

  .graphql-cms .github .button {
    text-align: center !important;
    color: white !important;
    padding: 5px !important;
    width: 100% !important;
  }

  .graphql-cms .github .button i {
    margin: 0 5px 0 0 !important;
    padding: 0 !important;
    width: 10px !important;
    color: white !important;
  }

  .graphql-cms [type='file'] {
    display: none;
  }

  .graphql-cms [type='checkbox'] {
    margin-top: 3px !important;
  }

  .graphql-cms .message {
    position: fixed;
    z-index: 1;
    width: 250px;
    text-align: center;
    top: 16px;
    left: calc(50vw - 125px);
    transition: all 0.3s;
  }

  .graphql-cms #ms-success {
    visibility: hidden;
    opacity: 0;
    display: none;
    transition: visibility 0.3s, opacity 0.3s linear;
  }

  .graphql-cms #ms-error {
    visibility: hidden;
    opacity: 0;
    display: none;
    transition: visibility 0.3s, opacity 0.3s linear;
  }

  .graphql-cms textarea {
    height: 185px !important;
  }

  .graphql-cms .table {
    border: none !important;
  }

  .graphql-cms .button {
    background: var(--color-main) !important;
  }

  .graphql-cms .button:hover,
  .graphql-cms .button:focus {
    background: var(--color-main-background-focus) !important;
  }

  .graphql-cms .loading-block {
    min-height: 100px !important;
    margin: 0 !important;
  }

  .graphql-cms .loading-block .dimmer {
    background: var(--color-main) !important;
  }

  .graphql-cms .icon {
    color: var(--color-main) !important;
  }

  .graphql-cms .ui.inverted.pointing.menu .active.item::after {
    display: none;
  }

  .graphql-cms .loading-block {
    height: 100% !important;
    min-height: 100px !important;
  }

  .graphql-cms .SideMenuWrapper {
    margin: 0 !important;
    padding: 0 !important;
  }

  .graphql-cms .SideMenuWrapper .SideMenu {
    background: var(--color-main) !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .graphql-cms .SideMenuWrapper .mobile-nav {
    text-align: center !important;
  }

  .graphql-cms .View {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border-top: 2px solid var(--color-main) !important;
  }

  .graphql-cms .View .selection {
    margin-bottom: 14px !important;
  }

  .graphql-cms .View .selector-add {
    display: inline-block;
    float: right;
    margin: 0 0 5px 10px !important;
    padding: 2px !important;
    color: white !important;
  }

  .graphql-cms .View .selector-add i {
    color: white !important;
  }

  .graphql-cms .View .nestedFields {
    margin: 0 !important;
    padding: 0 !important;
  }

  .graphql-cms .View .nestedFields .nested-title {
    color: black;
  }

  .graphql-cms .View .nestedFields .divider {
    text-transform: none !important;
  }

  .graphql-cms .View .form {
    margin: 0 !important;
  }

  .graphql-cms .View .btn-row {
    text-align: right;
    margin: 0;
    padding: 14px;
  }

  .graphql-cms .View .btn-row .button {
    padding: 11px !important;
  }

  .graphql-cms .View .List th {
    color: var(--color-main) !important;
  }

  .graphql-cms .View .List tr td:first-child {
    width: 20px !important;
  }

  .graphql-cms .View .List tr td:last-child {
    padding: 0 !important;
    width: 139px !important;
  }

  .graphql-cms .View .List tr .action-btn {
    padding: 10px !important;
    margin: 5px !important;
  }

  .graphql-cms .View .List .add-btn {
    height: 40px !important;
    padding: 11px !important;
    margin: 0 !important;
  }

  .graphql-cms_modal {
    padding: 0 !important;
    height: auto !important;
    position: relative !important;
  }

  .graphql-cms_modal .content {
    margin: 0 !important;
    padding: 14px !important;
  }

  .graphql-cms_modal .content::before {
    display: none !important;
  }

  .graphql-cms_modal .selection {
    margin-bottom: 14px !important;
  }

  .graphql-cms_modal .selector-add {
    display: inline-block;
    float: right;
    margin: 0 0 5px 10px !important;
    padding: 2px !important;
    color: white !important;
  }

  .graphql-cms_modal .selector-add i {
    color: white !important;
  }

  .graphql-cms_modal .btn-row {
    text-align: right;
    width: 78px !important;
    margin: 0 !important;
    padding: 0 !important;
    float: right;
  }

  .graphql-cms_modal .btn-row .button {
    padding: 3px 14px !important;
  }

  .graphql-cms_modal .button {
    display: inline-block;
    margin: 5px !important;
    padding: 2px !important;
  }

  .graphql-cms_modal .nestedFields {
    margin: 0 !important;
    padding: 0 !important;
  }

  .graphql-cms_modal .nestedFields .nested-title {
    color: black;
  }

  .graphql-cms_modal .nestedFields .divider {
    text-transform: none !important;
  }

  .graphql-cms_modal .form {
    margin: 0 !important;
  }`;
