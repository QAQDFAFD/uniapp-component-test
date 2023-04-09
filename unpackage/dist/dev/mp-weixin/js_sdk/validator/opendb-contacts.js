"use strict";
const validator = {
  "username": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "姓名",
    "label": "姓名"
  },
  "gender": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "未知",
            "value": 0
          },
          {
            "text": "男",
            "value": 1
          },
          {
            "text": "女",
            "value": 2
          }
        ]
      }
    ],
    "title": "性别",
    "defaultValue": 0,
    "label": "性别"
  },
  "mobile": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "pattern": "^\\+?[0-9-]{3,20}$"
      }
    ],
    "title": "电话",
    "label": "电话"
  },
  "email": {
    "rules": [
      {
        "format": "string"
      },
      {
        "format": "email"
      }
    ],
    "title": "邮箱",
    "label": "邮箱"
  },
  "comment": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "备注",
    "label": "备注"
  }
};
const enumConverter = {
  "gender_valuetotext": {
    "0": "未知",
    "1": "男",
    "2": "女"
  }
};
exports.enumConverter = enumConverter;
exports.validator = validator;
