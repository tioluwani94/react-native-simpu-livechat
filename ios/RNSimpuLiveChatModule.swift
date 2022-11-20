//
//  RNSimpuLiveChatModule.swift
//  RNSimpuLiveChatModule
//
//  Copyright © 2022 Tioluwani Kolawole. All rights reserved.
//

import Foundation

@objc(RNSimpuLiveChatModule)
class RNSimpuLiveChatModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
