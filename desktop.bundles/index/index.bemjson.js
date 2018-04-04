module.exports = {
  block: 'page',
  title: 'Title of the page',
  favicon: '/favicon.ico',
  head: [{
    elem: 'meta',
    attrs: {
      name: 'description',
      content: ''
    }
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }, {
    elem: 'css',
    url: 'fonts.css'
  }, {
    elem: 'css',
    url: 'index.css'
  }, {
    elem: 'css',
    url: '../../node_modules/normalize.css/normalize.css'
  }, {
    elem: 'css',
    url: '../../libs/bxslider/jquery.bxslider.css'
  }, {
    elem: 'css',
    url: '../../libs/fancybox-master/dist/jquery.fancybox.css'
  }],
  scripts: [{
    elem: 'js',
    url: '../../libs/jquery-1.8.2/jquery.min.js'
  },{
    elem: 'js',
    url: '../../libs/jquery-2.1.3/jquery.min.js'
  },{
    elem: 'js',
    url: '../../libs/jquery-easing/jquery.easing.min.js'
  }, {
    elem: 'js',
    url: 'index.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-circle-progress/dist/circle-progress.js'
  }, {
    elem: 'js',
    url: '../../libs/progressbar/progressbar.js'
  }, {
    elem: 'js',
    url: '../../libs/isotope-docs/js/isotope-docs.min.js'
  }, {
    elem: 'js',
    url: '../../libs/bxslider/jquery.bxslider.min.js'
  }, {
    elem: 'js',
    url: '../../public/AppProgressBar.js'
  }, {
    elem: 'js',
    url: '../../public/BxSlider.js'
  }, {
    elem: 'js',
    url: '../../public/BxSliderService.js'
  }, {
    elem: 'js',
    url: '../../public/BxSliderTeam.js'
  }, {
    elem: 'js',
    url: '../../public/Common.js'
  }, {
    elem: 'js',
    url: '../../public/IsotopeGalleryOne.js'
  }, {
    elem: 'js',
    url: '../../public/IsotopeGalleryTwo.js'
  }, {
    elem: 'js',
    url: '../../public/RangeNumber.js'
  }, {
    elem: 'js',
    url: '../../public/0.js'
  }, {
    elem: 'js',
    url: '../../public/10.js'
  }],
  mods: {
    theme: 'wireframes'
  },
  content: [{
    block: 'header',
    content: [{
      block: 'header-wrap',
      content: [{
        block: 'logo',
        mix: {
          block: 'header',
          elem: 'logo'
        },
        content: [{
          elem: 'text',
          mix: {
            block: 'header',
            elem: 'text'
          },
          content: ['logo']
        }]
      }, {
        elem: 'nav',
        mix: {
          block: 'header',
          elem: 'nav'
        },
        content: [{
          content: 'Home',
          url: 'recommend'
        }, {
          content: 'about',
          url: 'list-events'
        }, {
          content: 'work',
          url: 'favorite'
        }, {
          content: 'services',
          url: 'artists'
        }, {
          content: 'team',
          url: 'artists'
        }, {
          content: 'contact',
          url: 'artists'
        }].map(function(item) {
          return {
            block: 'nav-item',
            tag: 'li',
            mods: {
              type: 'link'
            },
            content: {
              block: 'link',
              url: item.url,
              content: item.content
            }
          };
        })
      }]
    }, {
      block: 'gallery',
      content: [{
        block: 'slider',
        mix: {
          block: 'gallery',
          elem: 'slider'
        },
        content: [{
          block: 'nav',
          mix: {
            block: 'slider',
            elem: 'nav'
          },
          tag: 'ul',
          content: [{
            src: '../../img/ammunition_weapons-wallpaper-800x480.jpg'
          }, {
            src: '../../img/assassins_creed_origins_2017.jpg'
          }, {
            src: '../../img/empire_state_building.jpg'
          }].map(function(item) {
            return {
              block: 'nav-item',
              tag: 'li',
              mods: {
                type: 'link'
              },
              content: {
                block: 'image',
                url: item.src
              }
            };
          })
        }, {
          block: 'custom-nav',
          content: [{
            tag: 'span',
            attrs: {
              id: 'slider-next'
            }
          }, {
            tag: 'span',
            attrs: {
              id: 'slider-prev'
            }
          }]
        }]
      }]
    }, {
      block: 'description',
      content: [{
        elem: 'text',
        tag: 'p',
        mix: {
          block: 'description',
          elem: 'text'
        },
        content: 'Call For Action Components'
      }]
    }, {
      block: 'subscribe',
      content: [{
        block: 'text',
        mix: {
          block: 'subscribe',
          elem: 'text'
        },
        content: [{
          block: 'title',
          mix: {
            block: 'subscribe',
            elem: 'title'
          },
          content: 'Lorem Ipsum'
        }, {
          block: 'main',
          mix: {
            block: 'subscribe',
            elem: 'main'
          },
          content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis, est non commodo luctus, nisi eart porttitor ligula'
        }, {
          block: 'input-wrap',
          content: [{
            block: 'input',
            mix: {
              block: 'subscribe',
              elem: 'input'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'search'
            },
            placeholder: 'Enter email address'
          }, {
            block: 'button',
            mix: {
              block: 'subscribe',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'subscribe'
          }]
        }]
      }]
    }, {
      block: 'footer',
      content: [{
        block: 'footer-wrap',
        content: [{
          block: 'text',
          mix: {
            block: 'footer',
            elem: 'text'
          },
          content: 'Duis mollis est non commodo luctus nisi erat porttitor.'
        }, {
          block: 'button',
          mix: {
            block: 'footer',
            elem: 'button'
          },
          mods: {
            theme: 'islands',
            size: 'l',
            type: 'submit'
          },
          text: 'button'
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'features',
      content: {
        block: 'section',
        content: [{
          block: 'top',
          mix: {
            block: 'features',
            elem: 'top'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'features',
              elem: 'text'
            },
            tag: 'h2',
            content: 'Features'
          }]
        }, {
          block: 'product',
          mix: {
            mix: 'features',
            elem: 'product'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'features',
              elem: 'text'
            },
            tag: 'h2',
            content: 'our product'
          }, {
            block: 'main',
            tag: 'p',
            mix: {
              block: 'product',
              elem: 'main'
            },
            content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
          }]
        }, {
          block: 'button-wrap',
          content: [{
            block: 'button',
            mix: {
              block: 'footer',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'button'
          }, {
            block: 'button',
            mix: {
              block: 'footer',
              elem: 'button-white'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'button'
          }]
        }, {
          block: 'image-wrap',
          content: [{
            block: 'image',
            alt: 'iMac',
            url: '../../img/imac.png'
          }, {
            block: 'image',
            alt: 'ipad',
            url: '../../img/ipad.png'
          }, {
            block: 'image',
            alt: 'iphone',
            url: '../../img/iphone.png'
          }]
        }]
      }
    }]
  }, {
    block: 'section mgt20px',
    tag: 'section',
    content: [{
      block: 'product',
      content: [{
        block: 'img',
        mix: {
          block: 'product',
          elem: 'img'
        },
        content: [{
          block: 'image',
          alt: 'iphone',
          url: '../../img/big-iphone.png'
        }]
      }, {
        block: 'desc',
        mix: {
          block: 'product',
          elem: 'desc'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'our product'
        }, {
          block: 'desc-text',
          tag: 'p',
          mix: {
            block: 'product',
            elem: 'main'
          },
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
        }, {
          block: 'nav',
          tag: 'ul',
          mix: {
            block: 'product',
            elem: 'nav'
          },
          content: [{
            content: 'Quisque volutpat mattis eros.'
          }, {
            content: ' Nullam malesuada erat ut turpis'
          }, {
            content: 'Suspendisse urna nibh'
          }].map(function(item) {
            return {
              block: 'item',
              tag: 'li',
              content: {
                block: 'text',
                mix: {
                  block: 'nav',
                  elem: 'text'
                },
                content: item.content
              }
            };
          })
        }, {
          block: 'button',
          mix: {
            block: 'footer',
            elem: 'button-white'
          },
          mods: {
            theme: 'islands',
            size: 'l',
            type: 'submit'
          },
          text: 'big button'
        }]
      }]
    }, {
      block: 'our',
      mix: {
        block: 'section',
        elem: 'our_product'
      }
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'services',
      mix: {
        block: 'section',
        elem: 'services'
      },
      content: [{
        block: 'section',
        content: [{
          block: 'top',
          mix: {
            block: 'features',
            elem: 'top'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'features',
              elem: 'text'
            },
            tag: 'h2',
            content: 'Services'
          }]
        }, {
          block: 'product',
          mix: {
            mix: 'features',
            elem: 'product'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'features',
              elem: 'text'
            },
            tag: 'h2',
            content: 'SERVICES WE PROVIDE'
          }, {
            block: 'main',
            tag: 'p',
            mix: {
              block: 'product',
              elem: 'main'
            },
            content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
          }]
        }, {
          block: 'gallery',
          content: [{
            block: 'slider',
            mix: {
              block: 'gallery',
              elem: 'slider'
            },
            content: [{
              block: 'nav',
              mix: {
                block: 'services',
                elem: 'nav'
              },
              tag: 'ul',
              content: [{
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Branding'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }, {
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Design'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }, {
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Development'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }].map(function(item) {
                return {
                  block: 'nav-item',
                  tag: 'li',
                  mods: {
                    type: 'link'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'slider-content',
                    content: [{
                      block: 'title',
                      mix: {
                        block: 'slider-content',
                        elem: 'title'
                      },
                      tag: 'h3',
                      content: item.content[0]
                    }, {
                      block: 'main',
                      mix: {
                        block: 'slider-content',
                        elem: 'main'
                      },
                      content: item.content[1]
                    }]
                  }]
                };
              })
            }, {
              block: 'custom-nav',
              content: [{
                tag: 'span',
                attrs: {
                  id: 'slider-next'
                }
              }, {
                tag: 'span',
                attrs: {
                  id: 'slider-prev'
                }
              }]
            }]
          }]
        }]
      }]
    }, {
      block: 'provide',
      mix: {
        block: 'section',
        elem: 'provide'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'SERVICES WE PROVIDE'
      }, {
        block: 'main',
        tag: 'p',
        mix: {
          block: 'product',
          elem: 'main'
        },
        content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
      }, {
        block: 'main',
        mix: {
          block: 'provide',
          elem: 'main'
        },
        content: [{
          block: 'left',
          mix: {
            block: 'main',
            elem: 'left'
          },
          content: [{
            block: 'title',
            mix: {
              block: 'provide',
              elem: 'title-left'
            },
            content: 'Branding'
          }, {
            block: 'text',
            mix: {
              block: 'provide',
              elem: 'text-left'
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
          }, {
            block: 'title',
            mix: {
              block: 'provide',
              elem: 'title-left'
            },
            content: 'Development'
          }, {
            block: 'text',
            mix: {
              block: 'provide',
              elem: 'text-left'
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
          }]
        }, {
          block: 'right',
          mix: {
            block: 'main',
            elem: 'right'
          },
          content: [, {
            block: 'title',
            mix: {
              block: 'provide',
              elem: 'title-left'
            },
            content: 'Design'
          }, {
            block: 'text',
            mix: {
              block: 'provide',
              elem: 'text-left'
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
          }, {
            block: 'title',
            mix: {
              block: 'provide',
              elem: 'title-left'
            },
            content: 'rocket since'
          }, {
            block: 'text',
            mix: {
              block: 'provide',
              elem: 'text-left'
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'team',
      mix: {
        block: 'section',
        elem: 'team'
      },
      content: [{
        block: 'top',
        mix: {
          block: 'features',
          elem: 'top'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'Team Components'
        }]
      }, {
        block: 'product',
        mix: {
          mix: 'features',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'our team'
        }, {
          block: 'main',
          tag: 'p',
          mix: {
            block: 'product',
            elem: 'main'
          },
          content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
        }]
      },{
          block: 'gallery',
          content: [{
            block: 'slider',
            mix: {
              block: 'gallery',
              elem: 'slider'
            },
            content: [{
              block: 'nav',
              mix: {
                block: 'team',
                elem: 'nav'
              },
              tag: 'ul',
              content: [{
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Branding'
                }, {
                  content: 'CEO / Marketing Guru'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }, {
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Design'
                }, {
                  content: 'CEO / Marketing Guru'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }, {
                src: '../../img/serv-1.png',
                content: [{
                  content: 'Development'
                }, {
                  content: 'CEO / Marketing Guru'
                }, {
                  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                }]
              }].map(function(item) {
                return {
                  block: 'nav-item',
                  tag: 'li',
                  mods: {
                    type: 'link'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'slider-content',
                    content: [{
                      block: 'title',
                      mix: {
                        block: 'slider-content',
                        elem: 'title'
                      },
                      tag: 'h3',
                      content: item.content[0]
                    }, {
                      block: 'staff',
                      mix: {
                        block: 'slider-content',
                        elem: 'staff'
                      },
                      content: item.content[1]
                    }, {
                      block: 'main',
                      mix: {
                        block: 'slider-content',
                        elem: 'main'
                      },
                      content: item.content[2]
                    }, {
                      block: 'social',
                      mix: {
                        block: 'slider-content',
                        elem: 'social'
                      },
                      tag: 'ul',
                      content: [{
                      block: 'nav',
                      tag: 'ul',
                      content: [{
                        src: '../../img/fb.png',
                        url: 'https://ru.bem.info'
                      }, {
                        src: '../../img/tw.png',
                        url: 'https://ru.bem.info'
                      }].map(function(item) {
                        return {
                          block: 'nav-item',
                          tag: 'li',
                          content: [{
                            block: 'link',
                            url: item.url,
                            mods: {
                              type: 'link'
                            },
                            content: {
                              block: 'image',
                              url: item.src
                            }
                          }]
                        };
                      })
                    }]
                    }]
                  }]
                };
              })
            }, {
              block: 'custom-nav',
              content: [{
                tag: 'span',
                attrs: {
                  id: 'slider-next'
                }
              }, {
                tag: 'span',
                attrs: {
                  id: 'slider-prev'
                }
              }]
            }]
          }]
        }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'experience',
      mix: {
        block: 'section',
        elem: 'experience'
      },
      content: [{
        block: 'top',
        mix: {
          block: 'features',
          elem: 'top'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'Experience Components'
        }]
      }, {
        block: 'product',
        mix: {
          mix: 'features',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'WE GOT SKILLS!'
        }, {
          block: 'main',
          tag: 'p',
          mix: {
            block: 'product',
            elem: 'main'
          },
          content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
        }, {
          block: 'bar-wrap',
          content: [{
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar0'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'Web Design'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar1'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'HTML / CSS'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar2'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'Graphic Design'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar3'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'UI / UX'
              }]
            }]
          }]
        }]
      }, {
        block: 'product',
        mix: {
          block: 'progressbar',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'WE GOT SKILLS!'
        }, {
          block: 'main',
          tag: 'p',
          mix: {
            block: 'product',
            elem: 'main'
          },
          content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
        }, {
          block: 'progressbar',
          content: [{
            block: 'left',
            mix: {
              block: 'progressbar',
              elem: 'left'
            },
            content: [{
              block: 'progressbar',
              mix: {
                block: 'progressbar',
                elem: 'progressbar-linear'
              },
              content: [{
                attrs: {
                  id: 'line0'
                },
                content: [{
                  block: 'text',
                  mix: {
                    block: 'progressbar',
                    elem: 'progressbar-text'
                  },
                  content: 'Web Design'
                }]
              }]
            }, {
              block: 'progressbar',
              mix: {
                block: 'progressbar',
                elem: 'progressbar-linear'
              },
              content: [{
                attrs: {
                  id: 'line1'
                },
                content: [{
                  block: 'text',
                  mix: {
                    block: 'progressbar',
                    elem: 'progressbar-text'
                  },
                  content: 'Graphic Design'
                }]
              }]
            }]
          }, {
            block: 'right',
            mix: {
              block: 'progressbar',
              elem: 'right'
            },
            content: [{
              block: 'progressbar',
              mix: {
                block: 'progressbar',
                elem: 'progressbar-linear'
              },
              content: [{
                attrs: {
                  id: 'line2'
                },
                content: [{
                  block: 'text',
                  mix: {
                    block: 'progressbar',
                    elem: 'progressbar-text'
                  },
                  content: 'HTML / CSS'
                }]
              }]
            }, {
              block: 'progressbar',
              mix: {
                block: 'progressbar',
                elem: 'progressbar-linear'
              },
              content: [{
                attrs: {
                  id: 'line3'
                },
                content: [{
                  block: 'text',
                  mix: {
                    block: 'progressbar',
                    elem: 'progressbar-text'
                  },
                  content: 'UI / UX'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  },{
    block: 'section',
    tag: 'section',
    content: [{
      block: 'top',
      mix: {
        block: 'features',
        elem: 'top'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'Portfolio Components'
      }]
    }, {
      block: 'our',
      mix: {
        block: 'section',
        elem: 'our_portfolio'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'our portfolio'
      }, {
        block: 'main',
        tag: 'p',
        mix: {
          block: 'product',
          elem: 'main'
        },
        content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
      }, {
        block: 'wrap-button',
        mix: {
          block: 'our',
          elem: 'wrap-button'
        },
        content: [{
          block: 'all',
          attrs: {
            'data-filter': '*'
          },
          tag: 'button',
          content: 'all'
        }, {
          block: 'web',
          attrs: {
            'data-filter': '.web'
          },
          tag: 'button',
          content: 'web'
        }, {
          block: 'apps',
          attrs: {
            'data-filter': '.apps'
          },
          tag: 'button',
          content: 'apps'
        }, {
          block: 'icons',
          attrs: {
            'data-filter': '.icons'
          },
          tag: 'button',
          content: 'icons'
        }]
      },{
        block: 'wrap-grid',
        content: [{
        block: 'grid',
        content: [{
          block: 'item',
          attrs: {
            'data-category': 'web'
          },
          mix: {
            block: 'grid',
            elem: 'item web'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'web'
          },
          mix: {
            block: 'grid',
            elem: 'item two web'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'web'
          },
          mix: {
            block: 'grid',
            elem: 'item three web'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'all'
          },
          mix: {
            block: 'grid',
            elem: 'item thour apps'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'all'
          },
          mix: {
            block: 'grid',
            elem: 'item five apps'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'all'
          },
          mix: {
            block: 'grid',
            elem: 'item six apps'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'apps'
          },
          mix: {
            block: 'grid',
            elem: 'item seven apps'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'apps'
          },
          mix: {
            block: 'grid',
            elem: 'item eight icons'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }, {
          block: 'item',
          attrs: {
            'data-category': 'apps'
          },
          mix: {
            block: 'grid',
            elem: 'item nine'
          },
          content: [{
            block: 'wrap-image',
            mix: {
              block: 'grid',
              elem: 'wrap-image'
            },
            content: [{
              block: 'image',
              url: '../../img/image-grid.png'
            }]
          }, {
            block: 'text-normal',
            mix: {
              block: 'grid',
              elem: 'text-normal'
            },
            content: 'Neque Porro Quisquam'
          }, {
            block: 'text-small',
            mix: {
              block: 'grid',
              elem: 'text-small'
            },
            content: 'apps, icons, ui'
          }]
        }]
      }]
      }, {
        block: 'load',
        content: [{
          block: 'button',
          mix: {
            block: 'load',
            elem: 'button'
          },
          mods: {
            theme: 'islands',
            size: 'l',
            type: 'submit'
          },
          text: 'load more'
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'our',
      mix: {
        block: 'section',
        elem: 'our_portfolio'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'our portfolio'
      }]
    }, {
      block: 'pagination',
      content: [{
        elem: 'nav',
        tag: 'ul',
        content: [{
          content: 'all',
          attrs: '*'
        }, {
          content: 'nature',
          attrs: '.nature'
        }, {
          content: 'beauty',
          attrs: '.beauty'
        }, {
          content: 'stills',
          attrs: '.stills'
        }].map(function(item) {
          return {
            block: 'nav-item',
            tag: 'li',
            attrs: {
              'data-filter': item.attrs
            },
            mods: {
              type: 'link'
            },
            content: {
              block: 'link',
              url: item.url,
              content: item.content
            }
          };
        })
      }]
    }, {
      block: 'photo',
      content: [{
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem beauty'
        },
        attrs: {
          'data-category': 'beauty'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem beauty'
        },
        attrs: {
          'data-category': 'beauty'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }]
    }, {
      block: 'header-photo',
      content: [{
        block: 'header-text',
        mix: {
          block: 'photo',
          elem: 'header-text'
        },
        content: 'lorem ipsum dolor'
      }, {
        block: 'summ',
        mix: {
          block: 'photo',
          elem: 'summ'
        },
        content: '368 photos'
      }]
    }, {
      block: 'photo',
      content: [{
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem stills'
        },
        attrs: {
          'data-category': 'stills'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem stills'
        },
        attrs: {
          'data-category': 'stills'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem beauty'
        },
        attrs: {
          'data-category': 'beauty'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }]
    }, {
      block: 'header-photo',
      content: [{
        block: 'header-text',
        mix: {
          block: 'photo',
          elem: 'header-text'
        },
        content: 'lorem ipsum dolor'
      }, {
        block: 'summ',
        mix: {
          block: 'photo',
          elem: 'summ'
        },
        content: '368 photos'
      }]
    }, {
      block: 'photo',
      content: [{
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem stills'
        },
        attrs: {
          'data-category': 'stills'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem beauty'
        },
        attrs: {
          'data-category': 'beauty'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem nature'
        },
        attrs: {
          'data-category': 'nature'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }, {
        block: 'elem',
        mix: {
          block: 'photo',
          elem: 'elem beauty'
        },
        attrs: {
          'data-category': 'beauty'
        },
        content: [{
          block: 'image',
          url: '../../img/image-grid.png'
        }]
      }]
    }, {
      block: 'header-photo',
      content: [{
        block: 'header-text',
        mix: {
          block: 'photo',
          elem: 'header-text'
        },
        content: 'lorem ipsum dolor'
      }, {
        block: 'summ',
        mix: {
          block: 'photo',
          elem: 'summ'
        },
        content: '368 photos'
      }]
    }, {
      block: 'load',
      content: [{
        block: 'button',
        mix: {
          block: 'load',
          elem: 'button'
        },
        mods: {
          theme: 'islands',
          size: 'l',
          type: 'submit'
        },
        text: 'load more'
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'our',
      mix: {
        block: 'section',
        elem: 'our_portfolio'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'our portfolio'
      }]
    }, {
      block: 'wrap',
      mix: {
        block: 'photo',
        elem: 'wrap'
      },
      content: [{
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }, {
        block: 'photo-our',
        content: [{
          block: 'item',
          mix: {
            block: 'photo-our',
            elem: 'item'
          },
          content: [{
            block: 'image',
            url: '../../img/image-grid.png'
          }]
        }]
      }]
    }, {
      block: 'load',
      mix: {
        block: 'photo',
        elem: 'load'
      },
      content: [{
        block: 'button',
        mix: {
          block: 'load',
          elem: 'button'
        },
        mods: {
          theme: 'islands',
          size: 'l',
          type: 'submit'
        },
        text: 'load more'
      }]
    }]
  }, {

  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'statistics',
      mix: {
        block: 'section',
        elem: 'statistics'
      },
      content: [{
        block: 'top',
        mix: {
          block: 'features',
          elem: 'top'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'Statistics'
        }]
      }, {
        block: 'product',
        mix: {
          block: 'features',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'OUR COMPANY BY NUMBERS'
        }]
      }, {
        block: 'wrap',
        mix: {
          block: 'statistics',
          elem: 'wrap'
        },
        content: [{
          block: 'circle',
          mix: {
            block: 'main',
            elem: 'circle'
          },
          content: [{
            block: 'number',
            mix: {
              block: 'number',
              elem: 'circle'
            },
            attrs: {
              id: 'n-1'
            },
            content: '1.295.365'
          }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
        }, {
          block: 'circle',
          mix: {
            block: 'main',
            elem: 'circle'
          },
          content: [{
            block: 'number',
            mix: {
              block: 'number',
              elem: 'circle'
            },
            content: '5.365'
          }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
        }, {
          block: 'circle',
          mix: {
            block: 'main',
            elem: 'circle'
          },
          content: [{
            block: 'number',
            mix: {
              block: 'number',
              elem: 'circle'
            },
            content: '895.365'
          }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
        }, {
          block: 'circle',
          mix: {
            block: 'main',
            elem: 'circle'
          },
          content: [{
            block: 'number',
            mix: {
              block: 'number',
              elem: 'circle'
            },
            content: '65'
          }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
        }, {
          block: 'circle',
          mix: {
            block: 'main',
            elem: 'circle'
          },
          content: [{
            block: 'number',
            mix: {
              block: 'number',
              elem: 'circle'
            },
            content: '365'
          }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'testimonials',
      mix: {
        block: 'section',
        elem: 'testimonials'
      },
      content: [{
        block: 'product',
        mix: {
          block: 'testimonials',
          elem: 'product'
        },
        content: [{
          block: 'wrap-product',
          content: [{
            block: 'product-element',
            mix: {
              block: 'statistics',
              elem: 'product-element'
            },
            content: [{
              block: 'number',
              mix: {
                block: 'product-element',
                elem: 'number'
              },
              content: '365'
            }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
          }, {
            block: 'product-element',
            mix: {
              block: 'statistics',
              elem: 'product-element'
            },
            content: [{
              block: 'number',
              mix: {
                block: 'product-element',
                elem: 'number'
              },
              content: '98%'
            }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
          }, {
            block: 'product-element',
            mix: {
              block: 'statistics',
              elem: 'product-element'
            },
            content: [{
              block: 'number',
              mix: {
                block: 'product-element',
                elem: 'number'
              },
              content: '69'
            }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
          }, {
            block: 'product-element',
            mix: {
              block: 'statistics',
              elem: 'product-element'
            },
            content: [{
              block: 'number',
              mix: {
                block: 'product-element',
                elem: 'number'
              },
              content: '1,642'
            }, {
              block: 'link',
              mods: {
                  theme: 'islands',
                  size: 'xl'
              },
              mix: {
                block: 'text',
                elem: 'circle'
              },
              url: 'https://bem.info/',
              content: 'Lorem ipsum',
              target: '_blank'
          }]
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'features',
      mix: {
        block: 'section',
        elem: 'features'
      }
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'features',
      mix: {
        block: 'section',
        elem: 'features'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        mods: {
          theme: 'mgt'
        },
        tag: 'h2',
        content: 'OUR CLIENTS LOVE US'
      }, {
        block: 'left',
        mix: {
          block: 'main',
          elem: 'left'
        },
        content: [{
          block: 'review',
          mix: {
            block: 'provide',
            elem: 'review-left'
          },
          content: '“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'name-left'
          },
          content: 'Chanel Iman'
        }, {
          block: 'prof',
          mix: {
            block: 'provide',
            elem: 'prof-left'
          },
          content: 'CEO of Pinterest'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'review-left'
          },
          content: '“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'name-left'
          },
          content: 'Chanel Iman'
        }, {
          block: 'prof',
          mix: {
            block: 'provide',
            elem: 'prof-left'
          },
          content: 'CEO of Pinterest'
        }]
      }, {
        block: 'right',
        mix: {
          block: 'main',
          elem: 'right'
        },
        content: [{
          block: 'review',
          mix: {
            block: 'provide',
            elem: 'review-right'
          },
          content: '“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'name-left'
          },
          content: 'Chanel Iman'
        }, {
          block: 'prof',
          mix: {
            block: 'provide',
            elem: 'prof-left'
          },
          content: 'CEO of Pinterest'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'review-right'
          },
          content: '“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”'
        }, {
          block: 'name',
          mix: {
            block: 'provide',
            elem: 'name-left'
          },
          content: 'Chanel Iman',
        }, {
          block: 'prof',
          mix: {
            block: 'provide',
            elem: 'prof-left'
          },
          content: 'CEO of Pinterest'
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'logo',
      mix: {
        block: 'section',
        elem: 'logo'
      },
      content: [{
        block: 'image',
        url: '../../img/logo.png'
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'pricing',
      mix: {
        block: 'section',
        elem: 'pricing'
      },
      content: [{
        block: 'top',
        mix: {
          block: 'features',
          elem: 'top'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'Pricing Tables'
        }]
      }]
    }, {
      block: 'product',
      mix: {
        mix: 'features',
        elem: 'product'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'SELECT A PLAN'
      }, {
        block: 'main',
        tag: 'p',
        mix: {
          block: 'product',
          elem: 'main'
        },
        content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
      }]
    }, {
      block: 'plan',
      mix: {
        block: 'pricing',
        elem: 'plan'
      },
      content: [{
        block: 'personal',
        content: [{
          block: 'wrap-personal',
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'personal'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'your plan'
          }, {
            block: 'wrap-text',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Free'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature one'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature two'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature three'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '2x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature four'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '100x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature five'
            }]
          }]
        }]
      }, {
        block: 'professional',
        content: [{
          block: 'wrap-professional',
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'professional'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'your plan'
          }, {
            block: 'wrap-text',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Free'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature one'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature two'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature three'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '2x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature four'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '100x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature five'
            }]
          }]
        }]
      }, {
        block: 'business',
        content: [{
          block: 'wrap-business',
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'business'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'your plan'
          }, {
            block: 'wrap-text',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Free'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature one'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature two'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: 'Unlimited'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature three'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '2x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature four'
            }, {
              block: 'bold',
              mix: {
                block: 'wrap-text',
                elem: 'block'
              },
              tag: 'span',
              content: '100x'
            }, {
              block: 'text',
              mix: {
                block: 'plan',
                elem: 'text'
              },
              tag: 'p',
              content: 'feature five'
            }]
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'plan',
      mix: {
        block: 'section',
        elem: 'plan'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        mods: {
          theme: 'mgt'
        },
        tag: 'h2',
        content: 'SELECT A PLAN'
      }, {
        block: 'main',
        tag: 'p',
        mix: {
          block: 'product',
          elem: 'main'
        },
        content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
      }]
    }, {
      block: 'plan',
      mix: {
        block: 'pricing',
        elem: 'plan'
      },
      content: [{
        block: 'personal',
        mix: {
          block: 'plan',
          elem: 'personal'
        },
        content: [{
          block: 'wrap',
          mix: {
            block: 'header',
            elem: 'wrap'
          },
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'personal'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }]
        }, {
          block: 'body',
          mix: {
            block: 'plan',
            elem: 'body'
          },
          content: [{
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Free'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature one'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature two'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature three'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '2x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature four'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '100x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature five'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'get started'
          }]
        }]
      }, {
        block: 'professional',
        mix: {
          block: 'plan',
          elem: 'professional'
        },
        content: [{
          block: 'wrap',
          mix: {
            block: 'header',
            elem: 'wrap'
          },
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'professional'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }]
        }, {
          block: 'body',
          mix: {
            block: 'plan',
            elem: 'body'
          },
          content: [{
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Free'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature one'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature two'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature three'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '2x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature four'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '100x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature five'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'get started'
          }]
        }]
      }, {
        block: 'business',
        mix: {
          block: 'plan',
          elem: 'business'
        },
        content: [{
          block: 'wrap',
          mix: {
            block: 'header',
            elem: 'wrap'
          },
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'business'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }]
        }, {
          block: 'body',
          mix: {
            block: 'plan',
            elem: 'body'
          },
          content: [{
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Free'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature one'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature two'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature three'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '2x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature four'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '100x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature five'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'get started'
          }]
        }]
      }, {
        block: 'enterprise',
        mix: {
          block: 'plan',
          elem: 'enterprise'
        },
        content: [{
          block: 'wrap',
          mix: {
            block: 'header',
            elem: 'wrap'
          },
          content: [{
            block: 'text-header',
            mix: {
              block: 'personal',
              elem: 'text-header'
            },
            content: 'enterprise'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: '$9/Month'
          }]
        }, {
          block: 'body',
          mix: {
            block: 'plan',
            elem: 'body'
          },
          content: [{
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Free'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature one'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature two'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: 'Unlimited'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature three'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '2x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature four'
          }, {
            block: 'bold',
            mix: {
              block: 'wrap-text',
              elem: 'block'
            },
            tag: 'span',
            content: '100x'
          }, {
            block: 'text',
            mix: {
              block: 'plan',
              elem: 'text'
            },
            tag: 'p',
            content: 'feature five'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'get started'
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'pricing',
      mix: {
        block: 'section',
        elem: 'pricing'
      },
      content: [{
        block: 'top',
        mix: {
          block: 'features',
          elem: 'top'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'Contacts Components'
        }]
      }, {
        block: 'product',
        mix: {
          mix: 'features',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'get in touch'
        }]
      }, {
        block: 'form',
        content: [{
          block: 'left',
          mix: {
            block: 'form',
            elem: 'left'
          },
          content: [{
            block: 'input',
            mix: {
              block: 'form',
              elem: 'input'
            },
            mods: {
              theme: 'islands',
              size: 'm'
            },
            placeholder: 'Your Name'
          }, {
            block: 'input',
            mix: {
              block: 'form',
              elem: 'input'
            },
            mods: {
              theme: 'islands',
              size: 'm'
            },
            placeholder: 'Your Email'
          }, {
            block: 'textarea',
            mix: {
              block: 'form',
              elem: 'textarea'
            },
            mods: {
              theme: 'islands',
              size: 'm'
            },
            placeholder: 'Your message'
          }, {
            block: 'button',
            mix: {
              block: 'plan',
              elem: 'button'
            },
            mods: {
              theme: 'islands',
              size: 'l',
              type: 'submit'
            },
            text: 'send'
          }]
        }, {
          block: 'right',
          mix: {
            block: 'form',
            elem: 'right'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'form',
              elem: 'text'
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
          }, {
            block: 'text',
            mix: {
              block: 'form',
              elem: 'text'
            },
            mods: {
              type: 'bold'
            },
            content: '1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America.'
          }, {
            block: 'tel',
            mix: {
              block: 'form',
              elem: 'tel'
            },
            content: 'T: (2020)456-1111'
          }, {
            block: 'tel',
            mix: {
              block: 'form',
              elem: 'tel'
            },
            content: 'T: (2020)456-1111'
          }, {
            block: 'social',
            mix: {
              block: 'form',
              elem: 'social'
            },
            content: [{
              block: 'nav',
              tag: 'ul',
              content: [{
                src: '../../img/fb.png',
                url: 'https://ru.bem.info'
              }, {
                src: '../../img/tw.png',
                url: 'https://ru.bem.info'
              }, {
                src: '../../img/google.png',
                url: 'https://ru.bem.info'
              }].map(function(item) {
                return {
                  block: 'nav-item',
                  tag: 'li',
                  content: [{
                    block: 'link',
                    url: item.url,
                    mods: {
                      type: 'link'
                    },
                    content: {
                      block: 'image',
                      url: item.src
                    }
                  }]
                };
              })
            }]
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'product',
      mix: {
        mix: 'features',
        elem: 'product'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'get in touch'
      }, {
        block: 'main',
        tag: 'p',
        mix: {
          block: 'product',
          elem: 'main'
        },
        content: '1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111'
      }, {
        block: 'form',
        mix: {
          block: 'form',
          elem: 'wrap'
        },
        content: [{
          block: 'input',
          mix: {
            block: 'form',
            elem: 'input'
          },
          mods: {
            theme: 'islands',
            size: 'm',
            type: 'width'
          },
          placeholder: 'Your Name'
        }, {
          block: 'input',
          mix: {
            block: 'form',
            elem: 'input'
          },
          mods: {
            theme: 'islands',
            size: 'm',
            type: 'width'
          },
          placeholder: 'Your Email'
        }, {
          block: 'textarea',
          mix: {
            block: 'form',
            elem: 'textarea'
          },
          mods: {
            theme: 'islands',
            size: 'm',
            type: 'width'
          },
          placeholder: 'Your message'
        }, {
          block: 'button',
          mix: {
            block: 'plan',
            elem: 'button'
          },
          mods: {
            theme: 'islands',
            size: 'l',
            type: 'submit'
          },
          text: 'send'
        }, {
          block: 'social',
          mix: {
            block: 'form',
            elem: 'social'
          },
          mods: {
            type: 'bold'
          },
          content: [{
            block: 'nav',
            tag: 'ul',
            content: [{
              text: 'facebook'
            }, {
              text: 'twitter'
            }, {
              text: 'google+'
            }, {
              text: 'linkedln'
            }].map(function(item) {
              return {
                block: 'nav-item',
                tag: 'li',
                mods: {
                  type: 'link'
                },
                content: item.text
              };
            })
          }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{
      block: 'top',
      mix: {
        block: 'features',
        elem: 'top'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'features',
          elem: 'text'
        },
        tag: 'h2',
        content: 'Footer'
      }, {
        block: 'header-wrap',
        mods: {
          type: 'footer'
        },
        content: [{
          block: 'logo',
          mix: {
            block: 'header',
            elem: 'logo'
          },
          content: [{
            elem: 'text',
            mix: {
              block: 'header',
              elem: 'text'
            },
            content: ['logo']
          }]
        }, {
          elem: 'nav',
          mix: {
            block: 'header',
            elem: 'nav'
          },
          content: [{
            content: 'facebook',
            url: 'recommend'
          }, {
            content: 'twitter',
            url: 'list-events'
          }, {
            content: 'google+',
            url: 'favorite'
          }, {
            content: 'linkedln',
            url: 'artists'
          }].map(function(item) {
            return {
              block: 'nav-item',
              tag: 'li',
              mods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: item.url,
                content: item.content
              }
            };
          })
        }]
      }]
    }, {
      block: 'footer',
      content: [{
        block: 'header',
        mix: {
          block: 'header',
          elem: 'footer'
        },
        content: [{
          block: 'left',
          mix: {
            block: 'header',
            elem: 'left'
          },
          content: '2014 GraphicBurger. All rights reserved.'
        }, {
          block: 'right',
          mix: {
            block: 'header',
            elem: 'right'
          },
          content: [{
            block: 'image',
            url: '../../img/up.png'
          }]
        }]
      }, {
        block: 'body',
        mix: {
          block: 'footer',
          elem: 'body'
        },
        content: [{
          elem: 'text',
          mix: {
            block: 'header',
            elem: 'text'
          },
          content: ['logo']
        }, {
          block: 'text',
          mix: {
            block: 'form',
            elem: 'text'
          },
          mods: {
            type: 'regular'
          },
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
        }, {
          block: 'social',
          mix: {
            block: 'form',
            elem: 'social'
          },
          content: [{
              block: 'nav',
              tag: 'ul',
              content: [{
                src: '../../img/fb.png',
                url: 'https://ru.bem.info'
              }, {
                src: '../../img/tw.png',
                url: 'https://ru.bem.info'
              }, {
                src: '../../img/google.png',
                url: 'https://ru.bem.info'
              }].map(function(item) {
                return {
                  block: 'nav-item',
                  tag: 'li',
                  content: [{
                    block: 'link',
                    url: item.url,
                    mods: {
                      type: 'link'
                    },
                    content: {
                      block: 'image',
                      url: item.src
                    }
                  }]
                };
              })
            }]
        }]
      }]
    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }, {
    block: 'section',
    tag: 'section',
    content: [{

    }]
  }]
};
