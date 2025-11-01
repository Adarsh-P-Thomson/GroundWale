package org.groundwale.app

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform