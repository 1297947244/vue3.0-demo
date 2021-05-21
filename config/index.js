/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
'use strict'
var fs = require('fs')
var path = require('path')
var cfg_dir = path.join(__dirname)
var env = process.env.NODE_ENV
var lodash = require('lodash')

function file_exists (path) {
  try {
    fs.lstatSync(path)
    return true
  } catch (e) {
    return false
  }
}

function generate_cfg () {
  var default_config_path = path.join(cfg_dir, 'default.json')
  var local_config_path = path.join(cfg_dir, 'local.json')
  var local_config = {}
  var env_config = {}
  const version = require('../package.json').version
  if (file_exists(local_config_path)) {
    local_config = require(local_config_path)
  }
  if (env) {
    var env_cfg_path = path.join(cfg_dir, `${env}.json`)
    if (file_exists(env_cfg_path)) {
      console.log('file_exists', env_cfg_path)
      env_config = require(env_cfg_path)
    } else {
      console.warn('\nConfiguration file specified by env var ' + env + ' = ' + env_cfg_path + ' does not exist.\n')
    }
  }

  var default_config = require(default_config_path)
  var mixed_config = lodash.merge(
    {}, // apply modifications to this new dict
    default_config,
    env_config,
    local_config,
    {
      runtime: {
        version
      }
    })
  return mixed_config
}

module.exports = generate_cfg
