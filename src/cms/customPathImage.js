import React, { Component } from 'react';
import CMS from 'netlify-cms';
import { Map } from 'immutable';

export class CustomPathImageControl extends Component {
  constructor(props) {
    super(props);

    this.imageWidget = null;
    this.customMediaPath = this.props.field.get('customMediaPath');
    this.rawMediaPath = this.props.field.get('rawMediaPath');

    this.getAbsoluteValue = this.getAbsoluteValue.bind(this);
    this.getRawValue = this.getRawValue.bind(this);
    this.getAbsoluteMediaPaths = this.getAbsoluteMediaPaths.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { mediaPaths, value, onRemoveInsertedMedia, onChange } = nextProps;
    const mediaPath = mediaPaths.get(this.imageWidget.controlID);
    if (mediaPath && this.customMediaPath) {
      const pathArray = mediaPath.split('/');
      const filename = pathArray[pathArray.length - 1];
      const relativeMediaPath = this.customMediaPath + filename;
      if (relativeMediaPath !== value) {
        onChange(relativeMediaPath);
      }
    } else if (mediaPath && mediaPath !== value) {
      onChange(mediaPath);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      return true;
    }

    const mediaPath = nextProps.mediaPaths.get(this.imageWidget.controlID);
    if (mediaPath && nextProps.value !== mediaPath) {
      return true;
    }

    return false;
  }

  getAbsoluteValue() {
    if (this.props.value) {
      const value = this.props.value;
      if (this.customMediaPath && value.startsWith(this.customMediaPath)) {
        return value.slice(this.customMediaPath.length);
      }
      return value;
    }
    return '';
  }

  getRawValue() {
    if (this.props.value) {
      if (
        this.customMediaPath &&
        this.rawMediaPath &&
        this.props.value.startsWith(this.customMediaPath)
      ) {
        const pathArray = this.props.value.split('/');
        const filename = pathArray[pathArray.length - 1];
        const rawValue = this.rawMediaPath + filename;
        return rawValue;
      }
      return this.props.value;
    }
    return '';
  }

  getAbsoluteMediaPaths() {
    if (
      this.props.mediaPaths &&
      this.props.mediaPaths.size > 0 &&
      this.imageWidget
    ) {
      const value = this.getAbsoluteValue();
      const mediaPaths = this.props.mediaPaths.set(
        this.imageWidget.controlID,
        value
      );
      return mediaPaths;
    }
    return Map();
  }

  render() {
    const ImageWidget = CMS.getWidget('image').control;
    const { mediaPaths, value, getAsset, ...others } = this.props;
    const absoluteValue = this.getAbsoluteValue();
    const absoluteMediaPaths = this.getAbsoluteMediaPaths();

    return (
      <ImageWidget
        ref={widget => (this.imageWidget = widget)}
        mediaPaths={absoluteMediaPaths}
        value={absoluteValue}
        getAsset={this.getRawValue}
        {...others}
      />
    );
  }
}

export class CustomPathImagePreview extends Component {
  constructor(props) {
    super(props);

    this.customMediaPath = this.props.field.get('customMediaPath');
    this.rawMediaPath = this.props.field.get('rawMediaPath');

    this.getRawValue = this.getRawValue.bind(this);
  }

  getRawValue() {
    if (this.props.value) {
      if (
        this.customMediaPath &&
        this.rawMediaPath &&
        this.props.value.startsWith(this.customMediaPath)
      ) {
        const pathArray = this.props.value.split('/');
        const filename = pathArray[pathArray.length - 1];
        const rawValue = this.rawMediaPath + filename;
        return rawValue;
      }
      return this.props.value;
    }
    return '';
  }

  render() {
    const ImagePreview = CMS.getWidget('image').preview;
    const { value, ...others } = this.props;
    const rawValue = this.getRawValue();

    return <ImagePreview value={rawValue} {...others} />;
  }
}
